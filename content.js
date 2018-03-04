function getText(){
    return document.body.innerText
}

function makeYouHappy()
{
    modal.open();
}

function logSadness()
{
    var quant;
    chrome.storage.local.get('sadNum', function(item) {
        quant = item.sadNum;
        if (quant == null)
        {
            quant = 1;
            chrome.storage.local.set({'sadNum': 1});
        }
        else
        {
            quant++;
            chrome.storage.local.set({'sadNum': quant});
        }
        alert(quant)
    });
}

//tingle modal

// instanciate new modal
var modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});

// set content
var nameToOutput = "";
chrome.storage.local.get('submitted', function(item) {
        nameToOutput = item.submitted.toString();
    });
modal.setContent('<h1>hey there!</h1> <h1 id="dispName"></h1> <h1> I noticed you might be feeling low</h1>');
modal.setContent(nameToOutput);
//document.getElementById('dispName').innerHTML = nameToOutput;

// add a button
modal.addFooterBtn('Yes, I am', 'tingle-btn tingle-btn--primary', function() {
    // here goes some logic
    modal.close();
    modal2.open();
});

// add another button
modal.addFooterBtn('no - just have been reading some heavy content lately', 'tingle-btn tingle-btn--danger', function() {
    // here goes some logic
    modal.close();
});

var modal2 = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});

modal2.setContent('<h1>Can I suggest that you listen to some music? Here\'s what I\'d reccommend:</h1>');

// add a button
modal2.addFooterBtn('open the playlist', 'tingle-btn tingle-btn--primary', function() {
    // here goes some logic
    modal2.close();
    modal3.open();
});

// add another button
modal2.addFooterBtn('maybe later', 'tingle-btn tingle-btn--default', function() {
    // here goes some logic
    modal2.close();
});

var modal3 = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2', 'custom-class-3'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});

modal3.setContent('<h1>how are you feeling right now?</h1>');

// add a button
modal3.addFooterBtn('sad', 'tingle-btn tingle-btn--primary', function() {
    // here goes some logic
    modal3.close();
    modal4.open();
});

// add another button
modal3.addFooterBtn('anxious', 'tingle-btn tingle-btn--default', function() {
    // here goes some logic
    modal3.close();
});

// add another button
modal3.addFooterBtn('mad', 'tingle-btn tingle-btn--danger', function() {
    // here goes some logic
    modal3.close();
});

var modal4 = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});

modal4.setContent('<h1>would you like to feel it out or cheer up?</h1>');

// add a button
modal4.addFooterBtn('cheer up!', 'tingle-btn tingle-btn--primary', function() {
    // here goes some logic
    modal4.close();
});

// add another button
modal4.addFooterBtn('feel it out', 'tingle-btn tingle-btn--default', function() {
    // here goes some logic
    modal4.close();
});

function sentimentAnalysis()
{
	$(function() {
        var params = {
            // Request parameters
        };

        var docs = {'id' : '1', 'language': 'en', 'text' : getText()};

        //content size should be min between size and 5100
        var end = getText().toString().length;

        if (end > 5000)
        {
            end = 5000;
        }
        
        //display number of words to analyse
        //alert(end);

        var words = getText().toString().substring(0, end);

        //display words to be analysed
        //alert(words);

       // let word = 'I am so happy!!!!';

     /*   let documents = { 'documents': [
    { 'id': '1', 'language': 'en', 'text': 'I really enjoy the new XBox One S. It has a clean look, it has 4K/HDR resolution and it is affordable.' },
    { 'id': '2', 'language': 'es', 'text': 'Este ha sido un dia terrible, llegué tarde al trabajo debido a un accidente automobilistico.' },
    { 'id': '3', 'language': 'en', 'text': word}
        ]};*/

        let blahblah = { 'documents': [
    { 'id': '1', 'language': 'en', 'text': words}]};

        let body = JSON.stringify(blahblah);

        //let body = JSON.stringify(documents);
      
        $.ajax({
            url: "https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","fcb5a3418b80487ebd1c94d899ca8b65 ");
            },
            type: "POST",
            // Request body
            data: body,
        })
        .done(function(data) {
            alert("success");
            console.log(data);
            alert(data.documents[0].score);

            if (data.documents[0].score < 0.5)
            {
                makeYouHappy();
                logSadness();
            }
            //else youre already reading happy stuff and don't need to be reminded to be happy!
        })
        .fail(function() {
            alert("error");
        });
    });
}

//alert(getText())

sentimentAnalysis()
/*
function addButton()
{
	var google = document.getElementById("main");
    var button = document.createElement("button");
    var text = document.createTextNode("test");
    button.appendChild(text);
    google.appendChild(button);
}
<<<<<<< HEAD
addButton()*/
/*
addButton()

function addBanner()
{
    $("body").wrapAll("<div class='oldBody'></div>");
    $("body").prepend("<div id='banner'></div>");
}
addBanner() */

