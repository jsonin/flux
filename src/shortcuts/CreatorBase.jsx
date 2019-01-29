import EntryShortcut from './EntryShortcut';

export default class CreatorBase extends EntryShortcut {
    constructor(onUpdate, metadata, patient, shortcutData) {
        super(metadata);
        this.constructValueObject(patient, shortcutData);
        this.buildValueObjectAttributes(onUpdate);
    }
}