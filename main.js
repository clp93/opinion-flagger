function readUrl(tabId, changeInfo, tab) {// Read changeInfo URL
    if (changeInfo.url) {
      // Determine if URL contains opinion related regex(es).
      const regex = RegExp('opinion');
      // TODO(clp): Define more Regex-es for opinion articles.
      if (regex.test(changeInfo.url)) {
        chrome.tabs.sendMessage( tabId, {
          message: "opinion"},
          function(response) {
            if(chrome.runtime.lastError) {
              // Hack just in case content script hasn't loaded yet.
              setTimeout(readUrl(tabId,changeInfo,tab), 1000);
            } else {
              return true;
            }
          }
        );
      }
    }
    return true;
}

chrome.tabs.onUpdated.addListener(readUrl);
