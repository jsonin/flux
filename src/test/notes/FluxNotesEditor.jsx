import React from 'react';
import Slate from 'slate';
import Lang from 'lodash';
import ContextPortal from '../context/ContextPortal';
//import ContextManager from '../context/ContextManager';

// versions 0.20.3-0.20.7 of Slate seem to have an issue.
// when we change the selection and give focus in our key handlers, Slate changes the selection including
// focus and then immediately takes focus away. Not an issue in 0.20.2 and older. package.json currently
// forces a version less than 0.20.3.
import {Row, Col} from 'react-flexbox-grid';
import EditorToolbar from './EditorToolbar';
// Material UI component imports
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import AutoReplace from 'slate-auto-replace'
import SuggestionsPlugin from './../../lib/slate-suggestions-dist'

import StructuredFieldPlugin from './StructuredFieldPlugin';

// Styling
import './FluxNotesEditor.css';

// This forces the initial block to be inline instead of a paragraph. When insert structured field, prevents adding new lines
const initialState = Slate.Plain.deserialize('');
const schema = {
    nodes: {
        paragraph: props => <p {...props.attributes}>{props.children}</p>,
        heading: props => <h1 {...props.attributes}>{props.children}</h1>,
    },
    marks: {
        bold: (props) => <strong>{props.children}</strong>
    }
};

const structuredFieldTypes = [
    {
        name: 'typeStructuredField',
        value: 'structured_field'
    }
]

class FluxNotesEditor extends React.Component {
    constructor(props) {
        super(props);

		this.contextManager = this.props.contextManager;
		
		this.didFocusChange = false;
		
		this.selectingForShortcut = null;
		this.onPortalSelection = this.onPortalSelection.bind(this);
		this.onChange = this.onChange.bind(this);
		
        // Set the initial state when the app is first constructed.
        this.state = {
            state: initialState,
			isPortalOpen: false,
			portalOptions: null,
			left: 0,
			top: 0
        }

        // setup structured field plugin
        const structuredFieldPluginOptions = {
            updateEditorState: this.onEditorUpdate,
            updateCurrentShortcutValues: this.onCurrentShortcutValuesUpdate,
            changeCurrentShortcut: props.changeCurrentShortcut
        };
        structuredFieldTypes.forEach((type) => {
            const typeName = type.name;
            const typeValue = type.value;
            structuredFieldPluginOptions[typeName] = typeValue;
        });

        this.structuredFieldPlugin = StructuredFieldPlugin(structuredFieldPluginOptions);

        // setup suggestions plugin (autocomplete)
        this.suggestionsPluginCreators = SuggestionsPlugin({
            trigger: '#',
            capture: /#([\w]*)/,
            suggestions: this.suggestionFunction.bind(this),
            onEnter: this.choseSuggestedShortcut.bind(this)
        });
        this.suggestionsPluginInserters = SuggestionsPlugin({
            trigger: '@',
            capture: /@([\w]*)/,
            suggestions: this.suggestionFunction.bind(this),
            onEnter: this.choseSuggestedShortcut.bind(this)
        });
        
        this.plugins = [
			this.suggestionsPluginCreators,
			this.suggestionsPluginInserters,
			this.structuredFieldPlugin
		];
		
		this.autoReplaceBeforeRegExp = undefined;
		
		let autoReplaceAfters = [];
		let allShortcuts = this.props.shortcutManager.getAllShortcutClasses();
		allShortcuts.forEach((shortcutC) => {
			//let shortcut = new shortcutC();
			//console.log(shortcutC);
			autoReplaceAfters = autoReplaceAfters.concat(shortcutC.getTriggers());			
		});
		this.autoReplaceBeforeRegExp = new RegExp("(" + autoReplaceAfters.join("|") + ")", 'i');
		//console.log(this.autoReplaceBeforeRegExp);
		
		// now add an AutoReplace plugin instance for each shortcut we're supporting as well
		this.plugins.push(AutoReplace({
			"trigger": 'space',
			"before": this.autoReplaceBeforeRegExp,
			"transform": this.autoReplaceTransform.bind(this)
		}));
    }
		
	suggestionFunction(text) {
		let shortcuts = this.contextManager.getCurrentlyValidShortcuts();
		console.log(shortcuts);
        let suggestionsShortcuts = [];
        shortcuts.forEach((shortcut) => {
			const triggers = shortcut.getTriggers();
			triggers.forEach((trigger) => {
				const triggerNoPrefix = trigger.substring(1);
				if (triggerNoPrefix.includes(text)) {
					suggestionsShortcuts.push({
						"key": triggerNoPrefix,
						"value": trigger,
						"suggestion": triggerNoPrefix
					});
				}
			});
        });
		return suggestionsShortcuts;
	}
	
	choseSuggestedShortcut(suggestion) {
		const { state } = this.state; 
		const { anchorText, anchorOffset } = state
		const text = anchorText.text
        let shortcut = this.props.newCurrentShortcut(suggestion.value);
		
		if (!Lang.isNull(shortcut) && shortcut.needToSelectValueFromMultipleOptions()) {
			return this.openPortalToSelectValueForShortcut(shortcut, true, state.transform()).apply();
		} else {
			//TODO: consider replacing most of code below with call to function suggestionDeleteExistingTransform
			let index = { start: anchorOffset - 1, end: anchorOffset }

			if (text[anchorOffset - 1] !== shortcut.getPrefixCharacter()) {
				index = getIndexRangeForCurrentWord(text, anchorOffset - 1, anchorOffset - 1, shortcut.getPrefixCharacter())
			}
				
			const newText = `${text.substring(0, index.start)}`
			let transformBeforeInsert = state.transform().deleteBackward(anchorOffset).insertText(newText);
			let transformAfterInsert = this.insertStructuredFieldTransform(transformBeforeInsert, shortcut).focus();
			return transformAfterInsert.apply();
		}
	}
	
	autoReplaceTransform(transform, e, data, matches) {
		// need to use Transform object provided to this method, which AutoReplace .apply()s after return.
		console.log("in autoreplace transform. matches: " + matches.before[0]);
		let shortcut = this.props.newCurrentShortcut(matches.before[0]);
		if (!Lang.isNull(shortcut) && shortcut.needToSelectValueFromMultipleOptions()) {
			return this.openPortalToSelectValueForShortcut(shortcut, false, transform);
		} else {
			return this.insertStructuredFieldTransform(transform, shortcut).collapseToStartOfNextText().focus();
		}
	}
	
	openPortalToSelectValueForShortcut(shortcut, needToDelete, transform) {
		let portalOptions = shortcut.getValueSelectionOptions();
		let pos = position(this.state);
		
		this.setState({
			isPortalOpen: true,
			portalOptions: portalOptions,
			needToDelete: needToDelete,
			left: pos.left,
			top: pos.top
		});
		this.selectingForShortcut = shortcut;
		return transform.blur();
	}

	// called from portal when an item is selected (context is not null) or if portal is closed without
	// selection (context is null)
	onPortalSelection = (state, context) => {
		//console.log("onPortalSelection for context portal. context is null: " + (Lang.isNull(context)));
		this.setState({ isPortalOpen: false });
		if (Lang.isNull(context)) return state;
		//console.log("onPortalSelection for context portal " + context.context + " needToDelete some text first=" + this.state.needToDelete);
		//this.contextManager.addContext(context.object);
		let shortcut = this.selectingForShortcut;
		this.selectingForShortcut = null;
		shortcut.clearValueSelectionOptions();
		shortcut.setText(context.context);
		if (shortcut.isContext()) {
			shortcut.setValueObject(context.object);
		}
		this.contextManager.contextUpdated();
		let transform;
		if (this.state.needToDelete) {
			transform = this.suggestionDeleteExistingTransform();
		} else {
			transform = this.state.state.transform();
		}
		return this.insertStructuredFieldTransform(transform, shortcut).collapseToStartOfNextText().focus().apply();
		//return transform.insertText(context.context).focus().apply();
	}

	// consider reusing this method to replace code in choseSuggestedShortcut function
	suggestionDeleteExistingTransform(transform = null) {
		const { state } = this.state;
		if (Lang.isNull(transform)) {
			transform = state.transform();
		}
		const { anchorText, anchorOffset } = state
		const text = anchorText.text

		let index = { start: anchorOffset - 1, end: anchorOffset }

		if (text[anchorOffset - 1] !== '@') {
			index = getIndexRangeForCurrentWord(text, anchorOffset - 1, anchorOffset - 1, '@')
		}
			
		const newText = `${text.substring(0, index.start)}`
		return transform
			.deleteBackward(anchorOffset)
			.insertText(newText)	
	}

	handleInserter(needToDelete, valueFunc, transform = null) {
		let value = valueFunc(this.contextManager); //this.props.patient
		if (Lang.isArray(value)) {
			let portalOptions = [];
			value.forEach((item) => {
				portalOptions.push({key: item.entryId, context: item.specificType.coding.displayText, object: item});
			});
			let pos = position(this.state);
			
			let newTransform = transform;
			if (Lang.isNull(transform)) {
				newTransform = this.state.state.transform();
			}
			this.setState({
				isPortalOpen: true,
				portalOptions: portalOptions,
				needToDelete: needToDelete,
				left: pos.left,
				top: pos.top
			});
			return newTransform.blur();
		} else {
			value = "" + value;
			if (needToDelete) {
				return this.suggestionDeleteExistingTransform(transform).insertText(value).focus();
			} else {
				let newTransform = transform;
				if (Lang.isNull(transform)) {
					newTransform = this.state.state.transform();
				}
				return newTransform.insertText(value).focus();
			}
		}
	}
	
    insertStructuredFieldTransform(transform, shortcut) {
		if (Lang.isNull(shortcut)) return transform.focus();
        let result = this.structuredFieldPlugin.transforms.insertStructuredField(transform, shortcut); //2nd param needs to be Shortcut Object, how to create?
        return result[0];
    }

	componentDidMount = () => {
	}
	
    componentDidUpdate = (prevProps, prevState) => {
    }

    onChange = (state) => {
        //console.log("onChange: START");
        this.setState({
            state: state
        });
        //console.log("onChange: DONE");
    }


    // This gets called when the before the component receives new properties
    componentWillReceiveProps = (nextProps) => {

        if (this.props.itemToBeInserted !== nextProps.itemToBeInserted) {
            this.handleSummaryUpdate(nextProps.itemToBeInserted);
        }
    }

    /*
     * Handle updates when we have a new
     */
    handleSummaryUpdate = (itemToBeInserted) => {
        const currentState = this.state.state;
        const state = currentState
            .transform()
            .insertText(itemToBeInserted)
            .focus()
            .apply();
        this.setState({state: state});
    }

    /**
     * Check if the current selection has a mark with `type` in it.
     */
    handleMarkCheck = (type) => {
        const {state} = this.state;
        return state.marks.some(mark => mark.type === type);
    }

    /**
     * Check if the any of the currently selected blocks are of `type`.
     */
    handleBlockCheck = (type) => {
        const {state} = this.state;
        return state.blocks.some(node => node.type === type);
    }
	
    render = () => {
        //let {state} = this.state;
        //let isStructuredField = structuredFieldPlugin.utils.isSelectionInStructuredField(state);
        // Extract portal component from the plugin 
        const CreatorsPortal = this.suggestionsPluginCreators.SuggestionPortal;
		const InsertersPortal = this.suggestionsPluginInserters.SuggestionPortal;

        let noteDescriptionContent = null;
        if (this.props.patient == null) {
            noteDescriptionContent = "";
        } else {
            noteDescriptionContent = (
                <div id="note-description">
                    <Row>
                        <Col xs={5}>
                            <h1 id="note-title">Pathology Assessment</h1>
                        </Col>
                        <Col xs={2}>
                            <p className="note-description-detail-name">Date</p>
                            <p className="note-description-detail-value">20 June 2017</p>
                        </Col>
                        <Col xs={2}>
                            <p className="note-description-detail-name">Source</p>
                            <p className="note-description-detail-value">Pathology Report</p>
                        </Col>
                        <Col xs={3}>
                            <p className="note-description-detail-name">Signed By</p>
                            <p className="note-description-detail-value">not signed</p>
                        </Col>
                    </Row>

                    <Divider className="divider"/>
                </div>
            );
        }
		let errorDisplay = "";
		if (this.props.errors && this.props.errors.length > 0) {
			errorDisplay = (
				<div>
                    <Divider className="divider"/>
					<h1 style={{color:'red'}}>{this.props.errors.join()}</h1>
					<Divider className="divider"/>
				</div>
			);
		}
		const callback = {}
        /**
         * Render the editor, toolbar, dropdown and description for note
         */
        return (
            <div id="clinical-notes" className="dashboard-panel">
                <Paper className="panel-content trio">
                    {noteDescriptionContent}
                    <div className="MyEditor-root">
                        <EditorToolbar
                            onMarkCheck={this.handleMarkCheck}
                            onBlockCheck={this.handleBlockCheck}

                            onMarkUpdate={this.handleMarkUpdate}
                            onBlockUpdate={this.handleBlockUpdate}
                            patient={this.props.patient}
                        />
                        <Slate.Editor
                            placeholder={'Enter your clinical note here or choose a template to start from...'}
                            plugins={this.plugins}
                            state={this.state.state}
                            onChange={this.onChange}
                            schema={schema}
                        />
						{errorDisplay}
						<CreatorsPortal 
							state={this.state.state} />
						<InsertersPortal
							state={this.state.state} />
						<ContextPortal
							left={this.state.left}
							top={this.state.top}
							state={this.state.state}
							callback={callback}
							onSelected={this.onPortalSelection}
							contexts={this.state.portalOptions}
							capture={/@([\w]*)/}
							trigger={"@"}
							onChange={this.onChange}
							isOpened={this.state.isPortalOpen}
						/>
					</div>
                </Paper>
            </div>
        );

    }
}

function getPos(el) {
    // yay readability
    for (var lx=0, ly=0;
         el != null;
         lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return {left: lx,top: ly};
}

function position(state) {
	let pos = {};
	pos.left = state.left;
	pos.top = state.top;
	
	const parentNode = state.state.document.getParent(state.state.selection.startKey);
	const el = Slate.findDOMNode(parentNode);
	return getPos(el);
}

function getIndexRangeForCurrentWord(text, index, initialIndex, initialChar) {
  if (index === initialIndex) {
    return { 	start: getIndexRangeForCurrentWord(text, index - 1, initialIndex, initialChar), 
				end: getIndexRangeForCurrentWord(text, index + 1, initialIndex, initialChar) 	}
  }
  //console.log("start?" + (index<initialIndex) + " char=" + text[index] + " initial char=" + initialChar);
  if (text[index] === " " || text[index] === initialChar || text[index] === undefined) {
    return index
  }
  if (index < initialIndex) {
    return getIndexRangeForCurrentWord(text, index - 1, initialIndex, initialChar)
  }
  if (index > initialIndex) {
    return getIndexRangeForCurrentWord(text, index + 1, initialIndex, initialChar)
  }
}

export default FluxNotesEditor;