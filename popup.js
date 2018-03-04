document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('submitPhoneNumber').addEventListener('click', savePhoneFunction);
  document.getElementById('submitName').addEventListener('click', submitNameFunction);

});
checkIfNameAlready();

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

function submitNameFunction()
{

    chrome.storage.local.set({'submitted': document.getElementById('typedName').value});
    var nameToOutput = "";
    chrome.storage.local.get('submitted', function(item) {
        nameToOutput = item.submitted;
        document.getElementById('displayName').innerHTML = nameToOutput;
    });
}

function savePhoneFunction(e) 
{
    chrome.storage.local.set({'trustedPhone': document.getElementById('typedPhonenumber').value});
    chrome.storage.local.set({'trustedPerson': document.getElementById('typedTrusted').value});
}


//var port = chrome.runtime.connect();

/*
chrome.storage.local.get(['name'], function(items) {
        alert(items);
        document.getElementById('displayName').innerHTML = items;
    });
*/


/*
window.addEventListener('load', function load(event) {
    chrome.storage.local.get('name', function(result) {
        if (result != undefined && result.name != undefined) {
            document.getElementById('name').value = result.name;
        }
    });
    document.getElementById('save').onclick = function() {
        console.log('got here');
        alert('got here');
        chrome.storage.local.set({'name': document.getElementById('name').value});
    };
});
*/

/*

document.getElementById('save').onclick = trynaFunction;

function trynaFunction()
{
    alert('in the functionssskskksks');
}
*/
