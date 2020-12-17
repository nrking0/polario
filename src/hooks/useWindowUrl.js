import { useState, useEffect } from 'react';

/**
 * Returns the hostname of the web domain of the current tab user is on
 */
const useWindowUrl = (props) => {

    const [url, setUrl] = useState(null);

    useEffect(() => {
        /**
         * Default chrome query to receive the entire URL. 
         * Requires tabs within permissions of manifest.json
         */
        chrome.tabs.query({ 'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT },
            function (tabs) {
                setUrl(new URL(tabs[0].url).hostname);
            }
        );
    });

    return url;
}

export default useWindowUrl;