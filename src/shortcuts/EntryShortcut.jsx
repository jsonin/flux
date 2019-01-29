import Shortcut from './Shortcut';
import FluxObjectFactory from '../model/FluxObjectFactory';
import Lang from 'lodash';
import { createSentenceFromStructuredData } from './ShortcutUtils';

export default class EntryShortcut extends Shortcut {
    constructor(metadata) {
        super();
        this.metadata = metadata;
    }

    constructValueObject(patient, shortcutData) {
        this.patient = patient;
        if (Lang.isUndefined(shortcutData) || !shortcutData || shortcutData.length === 0) {
            this.object = FluxObjectFactory.createInstance({}, this.metadata["valueObject"], patient);
            this.isObjectNew = true;
        } else {
            const dataObj = JSON.parse(shortcutData);
            this.object = patient.getEntryById(dataObj.entryId);
            // We want to try and get this object -- if there is none, make a new one
            this.isObjectNew = !this.object;
            if (!this.object) { 
                this.object = FluxObjectFactory.createInstance({}, this.metadata["valueObject"], patient);
            }
        }
        this.setValueObject(this.object);
    }

    buildValueObjectAttributes(onUpdate) {
        // get attribute descriptions
        const metadataVOA = this.metadata["valueObjectAttributes"];
        this.valueObjectAttributes = {};
        this.values = {};
        this.isSet = {};
        metadataVOA.forEach((attrib) => {
            this.isSet[attrib.name] = false;
            if (Lang.isUndefined(attrib["attribute"])) {
                this.values[attrib.name] = false;
                attrib["attributePath"] = null;
                attrib["type"] = "boolean";
            } else {
                if (attrib["attribute"].includes("[]")) {
                    attrib["type"] = "list";
                } else {
                    attrib["type"] = "string";
                }
                attrib["attributePath"] = attrib["attribute"].split(".");

            }
            this.valueObjectAttributes[attrib.name] = attrib;
        });
        this.onUpdate = onUpdate;
        this.setAttributeValue = this.setAttributeValue.bind(this);
    }

    getAttributeValue(name) {
    }

    setAttributeValue(name, value, publishChanges = true, updatePatient = true) {
    }

    getText() {
    }

    hasParentContext() {
        const knownParent = this.metadata["knownParentContexts"];
        if (knownParent === 'Patient') return true;
        return !Lang.isUndefined(this.parentContext) && !Lang.isNull(this.parentContext);
    }

    establishParentContext(contextManager, relativeToShortcut = undefined) {
        //super.initialize(contextManager);
        const knownParent = this.metadata["knownParentContexts"];

        if (Lang.isUndefined(relativeToShortcut)) {
            if (knownParent) {
                this.parentContext = contextManager.getActiveContextOfType(knownParent);
            } else {
                this.parentContext = contextManager.getCurrentContext();
            }
        } else {
            const potentialParents = contextManager.getContextsBeforeShortcut(this, knownParent);
            if (potentialParents && potentialParents.length > 0) {
                this.parentContext = potentialParents[0];
            } else {
                this.parentContext = undefined;
            }
        }

        if (!Lang.isUndefined(this.parentContext)) {
            this.parentContext.addChild(this);
        }
    }

    initialize(contextManager, trigger = undefined, updatePatient = true) {
        super.initialize(contextManager, trigger, updatePatient);
        if (contextManager) {
            this.establishParentContext(contextManager);
        }
        // defaulting
        const metadataVOA = this.metadata["valueObjectAttributes"];
        if (updatePatient) { 
            metadataVOA.forEach((attrib) => {
                const curVal = this.getAttributeValue(attrib.name)
                if (Lang.isEmpty(curVal) && attrib.isSettable && attrib.type !== "list") {
                    this.setAttributeValue(attrib.name, null, true, updatePatient);
                }
            });
        }       
    }

    hasData() {
        const voaList = this.metadata["valueObjectAttributes"];
        let value, isSettable;
        let result = false;
        voaList.forEach((voa) => {
            value = this.getAttributeValue(voa.name);
            isSettable = Lang.isUndefined(voa.isSettable) ? false : (voa.isSettable === "true");
            if (isSettable) {
                if (Lang.isNull(value) || Lang.isUndefined(value) || value === '' || (Lang.isArray(value) && value.length === 0)) {
                } else {
                    result = true;
                }
            }
        });
        return result;
    }

    getEntryId() {
        return this.object.entryInfo.entryId;
    }

    getAsStringWithStyling(isSigned) {      
        return createSentenceFromStructuredData(this.metadata["structuredPhrase"], this.getAttributeValue.bind(this), this.getText(), true, isSigned);
    }

    getAsString() {        
        return createSentenceFromStructuredData(this.metadata["structuredPhrase"], this.getAttributeValue.bind(this), this.getText(), false);
    }

    _followPath(object, attributePath, startIndex) {
        let i, attributeName, list, index, start, end;
        const len = attributePath.length;
        let result = object;

        let perItemFollowPath = (item) => {
            return this._followPath(item, attributePath, i + 1);
        };
        for (i = startIndex; i < len; i++) {
            if (attributePath[i].endsWith("[]")) {
                attributeName = attributePath[i].substring(0, attributePath[i].length - 2);
                list = result[attributeName];
                if (Lang.isUndefined(list)) return null;
                return list.map(perItemFollowPath);
            } else if (attributePath[i].endsWith("]")) {
                start = attributePath[i].indexOf("[");
                end = attributePath[i].indexOf("]", start);
                attributeName = attributePath[i].substring(0, start);
                index = attributePath[i].substring(start + 1, end);
                list = result[attributeName];
                result = list[index];
            } else {
                result = result[attributePath[i]];
            }
            if (Lang.isUndefined(result)) return null;
        }
        return result;
    }
}