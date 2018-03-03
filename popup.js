document.addEventListener('DOMContentLoaded', ()=>{
    const btn = document.getElementById('submit');
    btn.addEventListener('click',()=>{
        chrome.tabs.executeScript(


            alert('THIS WORKS')
            {code: "document.body.innerText;"},
            function(text) 
            {
                const results = getSentimentAnalysis(text);
            }



            );
    }, false);
}, false);

/*function sentimentAnalysis()
{
    console.log('this works');
    $(function() {
        var params = {
            // Request parameters
        };
      
        $.ajax({
            url: "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","{fcb5a3418b80487ebd1c94d899ca8b65}");
            },
            type: "POST",
            // Request body
            data: document.body.innerText,
        })
        .done(function(data) {
            alert("success");
        })
        .fail(function() {
            alert("error");
        });
    });
}*/
/*

var words = chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendMessage(tab.id, {method: "getText"}, function(message) {
        if(message.method=="getText"){
            alltext = message.data;
        }
    });
});

*/

/*chrome.tabs.executeScript( {
    code: "document.body.innerText;"
}, function(text) {
    const results = getSentimentAnalysis(text);
});*/


/*chrome.tabs.executeScript( {
    code: "window.getSelection().toString();"
}, function(selection) {
    document.getElementById("output").innerHTML = selection[0];
});

console.log(words);*/