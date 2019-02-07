import SuggestionPortalSearchIndex from './SuggestionPortalSearchIndex';
import Lang from 'lodash';
import _ from 'lodash';

class SuggestionPortalShortcutServiceSearchIndex extends SuggestionPortalSearchIndex  {
    constructor(list, initialChar, shortcutManager) { 
        super(list, initialChar, shortcutManager)
    }

    updateIndex = (contextManager) => {
    }

    search = (searchText) => {
        if (Lang.isUndefined(searchText)) return [];
        console.log("find matches via calling service");
        return [ "foo" ];
    }
};

export default SuggestionPortalShortcutServiceSearchIndex;