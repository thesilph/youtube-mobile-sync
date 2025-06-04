document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get('userId', (result) => {
        let userId = result.userId;
        if (!userId) {
            userId = Math.random().toString(36).substring(5, 12);
            chrome.storage.local.set({ userId });
        }
        document.getElementById('userId').textContent = userId;
    });
});