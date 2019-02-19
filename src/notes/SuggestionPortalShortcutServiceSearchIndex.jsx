import SuggestionPortalSearchIndex from './SuggestionPortalSearchIndex';
import Lang from 'lodash';
import _ from 'lodash';
import ShortcutServicesClient from 'coze_healthflux_notes_autocomplete_api_example';

const ApiClient = new ShortcutServicesClient.ApiClient();
const api = new ShortcutServicesClient.DefaultApi(ApiClient);

async function synchronousAPICaller(searchText) {
    let result = await callDiagnosisOnAPI(api, searchText);
    return result;
}

function callDiagnosisOnAPI(api, searchText) {
    return new Promise((resolve, reject) => {
        api.diagnosis(searchText, (error, data, response) => {
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
        super();
    }

    updateIndex = (contextManager) => {
    }

    search = (searchText) => {
//        console.log("SuggestionPortalShortcutServiceSearchIndex.search: find matches via calling service ", searchText);
        if (Lang.isUndefined(searchText)) return [];
        //ApiClient.basePath = config.baseURL;

        return synchronousAPICaller(searchText).then((result) => {
            // api.diagnosis(searchText, callback);
            if (Lang.isUndefined(result)) return [];

            return result.map((s) => {
                return { key: s, value: s, suggestion: s, data: { score: 100, matches: []}};
            });
        }).catch((error) => {
            console.log("error", error);
            return [];
        });
    }
};

export default SuggestionPortalShortcutServiceSearchIndex;