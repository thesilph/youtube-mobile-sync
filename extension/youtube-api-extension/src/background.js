const API_ENDPOINT = 'https://keyvalue.immanuel.co/api/KeyVal/UpdateValue/14p2ivui/tttytyt/'; // Replace with your actual API endpoint

var thingproxy = 'https://cors-lopix.duarte-madureira-lopes.workers.dev/?url=';


chrome.runtime.onInstalled.addListener(() => {
    console.log('YouTube API Extension installed');
});

setInterval(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
            const tab = tabs[0];
            // Only proceed if on a YouTube watch page
            if (tab.url && tab.url.startsWith('https://www.youtube.com/watch')) {
                const tabId = tab.id;
                const currentUrl = tab.url;

                chrome.tabs.sendMessage(tabId, { type: 'GET_TIMESTAMP' }, (response) => {
                    const timestamp = response?.currentTime || '0';
                    const videoId = getVideoIdFromUrl(currentUrl) || '';
                    // No slash between videoId and timestamp
                    const proxiedUrl = thingproxy + encodeURIComponent(API_ENDPOINT + videoId + timestamp);

                    fetch(proxiedUrl, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ url: currentUrl, timestamp })
                    })
                    .then(response => {
                        if (!response.ok) {
                            console.error('Error calling API:', response.statusText);
                        }
                    })
                    .catch(error => {
                        console.error('Fetch error:', error);
                    });
                });
            }
        }
    });
}, 10000); // 10 seconds interval


function getVideoIdFromUrl(url) {
    const urlObj = new URL(url);
    const videoId = urlObj.searchParams.get('v');
    return videoId;
}

chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    if (details.url && details.url.startsWith('https://www.youtube.com/watch')) {
        chrome.scripting.executeScript({
            target: { tabId: details.tabId },
            files: ['content.js']
        });
    }
}, {url: [{hostContains: 'youtube.com'}]});

