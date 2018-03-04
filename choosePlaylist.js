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

