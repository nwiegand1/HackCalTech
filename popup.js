document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('submit').addEventListener('click', clickHandler);
  document.getElementById('save').addEventListener('click', saveFunction);
  document.getElementById('submitName').addEventListener('click', submitNameFunction);
});

function submitNameFunction()
{

    chrome.storage.local.set({'submitted': document.getElementById('typedName').value});
    var nameToOutput = "";
    chrome.storage.local.get('submitted', function(item) {
        nameToOutput = item.submitted;
        document.getElementById('displayName').innerHTML = nameToOutput;
    });
}

function clickHandler(e)
{
    //alert('got to the log in button');
    setTimeout(awesomeTask, 1000);
    console.log('logggggg');
}

function awesomeTask()
{
    console.log('logggggg');
    alert('got to the log in button');
}

function saveFunction(e) 
{
    console.log('saved name');
    chrome.storage.local.set({'name': document.getElementById('name').value});

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
