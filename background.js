console.log("Hello Browser");
chrome.browserAction.onClicked.addListener(buttonClicked);
function buttonClicked (tab){
    let msg = {
        txt: 'Background scripts says Hello'
    }
    chrome.tabs.sendMessage(tab.id, msg)
}