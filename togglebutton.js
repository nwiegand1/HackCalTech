var Togglecheckbox = document.getElementById("toggleOnOffCheckBox");
Togglecheckbox.addEventListener( 'change', function() {
    if(this.checked) {
        chrome.storage.local.set({'toggleOnOff': true});
        console.log("toggle extension to on");
    } else {
        chrome.storage.local.set({'toggleOnOff': false});
        console.log("toggle extension to off");
    }
});

function getToggleOnOff(){
    var toggle;
    chrome.storage.local.get('toggleOnOffValue', function(item) {
        toggle = item.toggleOnOff;
        if (toggle == null){
            toggle = true;
            chrome.storage.local.set({'toggleOnOffValue': true});
            document.getElementById("toggleOnOffCheckBox").checked = true;
        }
        else{
            document.getElementById("toggleOnOffCheckBox").checked = toggle;
        }
        alert(toggle);
    });
    return toggle;
}