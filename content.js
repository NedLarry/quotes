console.log("hello from Quotes extension :)");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage (message, sender, senderResponse){
    console.log(message.txt);
}