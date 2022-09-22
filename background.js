
function productivity() {

    chrome.runtime.onInstalled.addListener(() => {

        // Page actions are disabled by default and enabled on select tabs
        chrome.browserAction.disable()
        })
}


chrome.pageAction.onClicked.addListener(
    callback: function,
  )