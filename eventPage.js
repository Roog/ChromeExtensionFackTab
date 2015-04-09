//
// Any tab is closed, check
//
chrome.tabs.onRemoved.addListener(function (tabId, removeInfo) {
	var audio = new Audio("noise.ogg");
	audio.play();
});