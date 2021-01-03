chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    const orange_color = "#FFA500";
    if (request.message === 'opinion') {
      // Change Color
      document.body.style.backgroundColor = orange_color;      
    } else {
    }
    sendResponse({message: "great success"});
    return true;
});
