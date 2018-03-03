function getText(){
    return document.body.innerText
}

chrome.extension.onRequest.addListener(
    function(request, sender, sendResponse) {
        if(request.method == "getText"){
            sendResponse({data: document.all[0].innerText, method: "getText"}); //same as innerText
        }
    }
);

function sentimentAnalysis()
{
	$(function() {
        var params = {
            // Request parameters
        };
      
        $.ajax({
            url: "https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","{fcb5a3418b80487ebd1c94d899ca8b65}");
            },
            type: "POST",
            // Request body
            data: getText(),
        })
        .done(function(data) {
        	//
            alert("success");
        })
        .fail(function() {
            alert("error");
        });
    });
}

alert("Hello from your Chrome extension!")
