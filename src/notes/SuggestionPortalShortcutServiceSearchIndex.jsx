import SuggestionPortalSearchIndex from './SuggestionPortalSearchIndex';
import Lang from 'lodash';
import _ from 'lodash';
import ShortcutServicesClient from 'coze_healthflux_notes_autocomplete_api_example';

const ApiClient = new ShortcutServicesClient.ApiClient();
const api = new ShortcutServicesClient.DefaultApi(ApiClient);

function callValuesetOnAPI(api, valueSetType, searchText) { //valuesetname, searchText
    return new Promise((resolve, reject) => {
        api.valueset(valueSetType, searchText, (error, data, response) => { //valuesetname, searchText
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}

class SuggestionPortalShortcutServiceSearchIndex extends SuggestionPortalSearchIndex  {
    constructor(list, initialChar, shortcutManager) {
        super(list, initialChar, shortcutManager)
        this.currentlyValidServiceShortcuts = [];
        this.targetShortcutMetadata = null;
    }

    updateIndex = (contextManager) => {
        const serviceShortcuts = contextManager.getCurrentlyValidShortcuts(this.shortcutManager).filter((value) => {
            return this.shortcutManager.getShortcutMetadata(value.id)["type"] === 'CreatorChildService';
        });
        if (Lang.isEqual(serviceShortcuts, this.currentlyValidServiceShortcuts)) return
        this.currentlyValidServiceShortcuts = serviceShortcuts;

        if (Lang.isEmpty(this.currentlyValidServiceShortcuts)) {
            this.targetShortcutMetadata = null;
            return [];
        }

        const shortcutId = this.currentlyValidServiceShortcuts[0].id;
        this.targetShortcutMetadata = this.shortcutManager.getShortcutMetadata(shortcutId);
    }

    search = (searchText) => {
        if (Lang.isUndefined(searchText)) return [];
        if (!this.targetShortcutMetadata) return [];
        ApiClient.basePath = this.targetShortcutMetadata["service"];

        // valueSetType
        const valueSetType = this.targetShortcutMetadata["valueSetType"];

        // call API
        return callValuesetOnAPI(api, valueSetType, searchText).then((result) => {
            return result.map((s) => {
                return { 
                    key: s.code, 
                    value: {name: s.label, description: s.code + " - " + s.label, code: s.code, label: s.label, codeSystem: s.codesystem }, 
                    suggestion: s.label, 
                    data: { score: 100, matches: [ s.label ]},
                    shortcut: this.targetShortcutMetadata
                };
            });
        });
    }
};

export default SuggestionPortalShortcutServiceSearchIndex;