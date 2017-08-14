import React, {Component} from 'react';
import Lang from 'lodash'
import RaisedButton from 'material-ui/RaisedButton';

export default class ContextOptions extends Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
	}

    render() {
		let context = this.props.context;
		if (Lang.isUndefined(context)) {
			// patient
			context = this.props.contextManager.getPatientContext();
		}
		let validShortcuts = context.getValidChildShortcuts();
		return (
		   <div style={{margin: '20px'}}>
				{validShortcuts.map((shortcut, i) => {
					return (
						<div key={i*100}>
							{shortcut.getTriggers().map((trigger, j) => {
								return (
									<RaisedButton
										className="btn_template"
										label={trigger}
										key={(i*100) + j + 1}
										onClick={(e) => this._handleClick(e, (i*100) + j + 1)}
									/>
								);
							})}
						</div>
					);
				})}
			</div>
		);
	}

	_handleClick(e, i) {
		e.preventDefault();
		this.props.handleClick(i);
	}
}