import EntryShortcut from './EntryShortcut';
import Lang from 'lodash';

export default class NLPHashtag extends EntryShortcut {
    constructor(onUpdate, metadata, patient, shortcutData) {
        super(metadata);
        this.nlpTemplate = this.metadata["nlpTemplate"];
        this.constructValueObject(patient, shortcutData);
        this.buildValueObjectAttributes(onUpdate);
    }
}