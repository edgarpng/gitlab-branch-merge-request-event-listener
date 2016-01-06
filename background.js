chrome.app.runtime.onLaunched.addListener(function() {
    //chrome.tabs.create({ url: 'app/index.html' });
    window.open('app/index.html');
});