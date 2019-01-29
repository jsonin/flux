import EntryShortcut from './EntryShortcut';

export default class SingleHashtagKeyword extends EntryShortcut {
    constructor(onUpdate, metadata, patient, shortcutData) {
        super(metadata);
        this.constructValueObject(patient, shortcutData);
        this.buildValueObjectAttributes(onUpdate);
    }
}