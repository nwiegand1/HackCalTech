//all the playlist IDs and titles
var anxiousFearPlaylists = ['37i9dQZF1DX4sWSpwq3LiO', '37i9dQZF1DX3Ogo9pFvBkY', '37i9dQZF1DXcCnTAt8CfNe', 
'7A2YimOfIrmAWkCeSIY8Rq', '37i9dQZF1DWU0ScTcjJBdj', '37i9dQZF1DX3PIPIT6lEg5', '37i9dQZF1DX1s9knjP51Oa', 
'37i9dQZF1DXa9xHlDa5fc6', '37i9dQZF1DWTkxQvqMy4WW', '37i9dQZF1DX8ymr6UES7vc', '37i9dQZF1DWZqd5JICZI0u'];

var happyPlaylists = ['37i9dQZF1DX3rxVfibe1L0', '37i9dQZF1DX7KNKjOK0o75', '37i9dQZF1DWYBO1MoTDhZI', 
'37i9dQZF1DXdPec7aLTmlC', '37i9dQZF1DWSkMjlBZAZ07', '37i9dQZF1DX9XIFQuFvzM4', '37i9dQZF1DX2sUQwD7tbmL', 
'37i9dQZF1DX0UrRvztWcAU', '37i9dQZF1DXaK0O81Xtkis', '37i9dQZF1DWSf2RDTDayIx'];

var sadPlaylists = ['37i9dQZF1DX3YSRoSdA634', '37i9dQZF1DWSqBruwoIXkA', '37i9dQZF1DWVV27DiNWxkR'];

var angerPlaylists = ['37i9dQZF1DWU6kYEHaDaGA', '37i9dQZF1DWWJOmJ7nRx0C', '5s7Sp5OZsw981I2OkQmyrz', 
'37i9dQZF1DWTcqUzwhNmKv', '37i9dQZF1DWXIcbzpLauPS'];

var anxiousFearPlaylistsTitles = ['Peaceful Piano', 'Ambient Chill', 'Musical Therapy', 'Calm Classics', 'Relax & Unwind', 
'Microtherapy', 'Calm Vibes', 'License to Chill', 'Chillin on a Dirt Road', 'Rain Sounds', 'Peaceful Meditation'];

var happyPlaylistsTitles = ['Mood Booster', 'Have a Great Day!', 'Good Vibes', 'Happy Hits', 'Happy Folk', 'Feelin Good', 
'Feel-Good Indie Rock', 'Wake Up Happy', 'Happy Chill Good Time Vibes', 'Happy Beats'];

var sadPlaylistsTitles = ['Life Sucks', 'Down in the Dumps', 'Melancholia'];

var angryPlaylistsTitles = ['Unleash the Fury', 'Rock Hard', 'Rage Quit', 'Kickass Metal', 'Metalcore'];

function choosePlaylist(mood) {
    var playlist;
    var title;
    if (mood == 'anxiousFear'){
        var index = Math.floor(Math.random() * anxiousFearPlaylists.length);
        playlist = anxiousFearPlaylists[index];
        title = anxiousFearPlaylistsTitles[index];
    }
    else if (mood == 'happy'){
        var index = Math.floor(Math.random() * happyPlaylists.length);
        playlist = happyPlaylists[index];
        title = happyPlaylistsTitles[index];
    }
    else if (mood == 'sad'){
        var index = Math.floor(Math.random() * sadPlaylists.length);
        playlist = sadPlaylists[index];
        title = sadPlaylistsTitles[index];
    }
    else if (mood == 'angry'){
        var index = Math.floor(Math.random() * angryPlaylists.length);
        playlist = angryPlaylists[index];
        title = angryPlaylistsTitles[index];
    }
    return [playlist, title];
}

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
    openInNewTab('https://open.spotify.com/embed?uri=spotify:user:spotify:playlist:' + choosePlaylist('anxiousFear')[0]);
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

            if (data.documents[0].score < 0.2)
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


function openInNewTab(url) {
  var win = window.open(url, '_blank', 'location=yes,height=300,width=300,scrollbars=yes,status=yes,
    frameborder="0",allow="encrypted-media",allowtransparency="true"');
  win.focus();
}

/*
=======
>>>>>>> a5696bb229615dd4033015b2182b67dab47f7a61
function addButton()
{
	var google = document.getElementById("main");
    var button = document.createElement("button");
    var text = document.createTextNode("test");
    button.appendChild(text);
    google.prepend(button);
}

addButton()

/*

function addBanner()
{
    $("body").wrapAll("<div class='oldBody'></div>");
    $("body").prepend("<div id='banner'></div>");
}
addBanner() 
*/

