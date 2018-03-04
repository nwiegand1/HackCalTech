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

modal2.setContent('<h1>Can I suggest that you listen to some music to lighten your mood? Here\'s what I\'d reccommend:</h1>');

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
    //express concern bc have visited lots of sad pages
    var quant;
    chrome.storage.local.get('sadNum', function(item) {
        if (item.sadNum > 5)
        {
            modal5.open();
        }
    });
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

//modal 5
var modal5 = new tingle.modal({
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

modal5.setContent('<h1>we\'re concerned about you and have noticed that you have been looking at a lot of heavy content, please reach out to a mental health hotline if you\'re struggling</h1>');

// add a button
modal5.addFooterBtn('call a mental health hotline - teenline', 'tingle-btn tingle-btn--primary', function() {
    // here goes some logic
    callHotline();
    modal5.close();

});

modal5.addFooterBtn('call a family member', 'tingle-btn tingle-btn--primary', function() {
    // here goes some logic
    modal5.close();
});



function callHotline()
{
    $(function() {
        
        const accountSid = 'AC789d4c412fd6578d774753707937db8b';
        const authToken = 'b9b64a1dacafd3f1a8b8408ba5513e7f';

        var body = {
    'Url': 'https://handler.twilio.com/twiml/EH49f3c8b695ed4c888a72d8d799e5bd84',
    'To': '+19252095421',
    'From': '+18186167686'
        };
        var encoded = btoa(`${accountSid}:${authToken}`);

        $.ajax({
            url: `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Calls.json`,
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                xhrObj.setRequestHeader("Authorization",`Basic ${encoded}`);
            },
            type: "POST",
            // Request body
            data: body,
        })
        .done(function(data){
            console.log(data);
        })
        .fail(function(){

        });
     });   
}



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

