chrome.browserAction.onClicked.addListener(function(tab) 
{
   checkIfNameAlready();
});

function checkIfNameAlready()
{
    var nameSaved;
    chrome.storage.local.get('submitted', function(item) {
        nameSaved = item.submitted;
        if (nameSaved != null)
        {
            document.getElementById('displayName').innerHTML = nameToOutput;
        }
    }); 
}