chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'GET_TIMESTAMP') {
        const video = document.querySelector('video');
        sendResponse({ currentTime: video ? video.currentTime.toFixed() : 27 });
    }
});