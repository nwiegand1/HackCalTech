function sentimentAnalysis()
{
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
}

var words = chrome.tabs.getSelected(null, function(tab) {
    chrome.tabs.sendRequest(tab.id, {method: "getText"}, function(response) {
        if(response.method=="getText"){
            alltext = response.data;
        }
    });
});