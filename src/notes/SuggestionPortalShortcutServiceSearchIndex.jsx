import SuggestionPortalSearchIndex from './SuggestionPortalSearchIndex';
import Lang from 'lodash';
import _ from 'lodash';
import ShortcutServicesClient from 'coze_healthflux_notes_autocomplete_api_example';

//const ApiClient = new ShortcutServicesClient.ApiClient();


class SuggestionPortalShortcutServiceSearchIndex extends SuggestionPortalSearchIndex  {
    constructor(list, initialChar, shortcutManager) {
        super();
    }

    updateIndex = (contextManager) => {
    }

    search = (searchText) => {
        console.log("SuggestionPortalShortcutServiceSearchIndex.search: find matches via calling service ", searchText);
        //ApiClient.basePath = config.baseURL;
        //const api = new ShortcutServicesClient.DefaultApi(ApiClient);
        if (Lang.isUndefined(searchText)) return [];

        return [ {
            key: "foo_key",
            value: "foo_value",
            suggestion: "foo",
            data: {
                // Use the bonus score to drag the most recent shortcuts to the top and weight the older ones to the bottom
                score: 100,
                matches: [],
            },
        } ];
    }
};

export default SuggestionPortalShortcutServiceSearchIndex;