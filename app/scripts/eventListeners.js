"use strict";
var addMusicView = document.getElementById('add-music-view');
var listMusicView = document.getElementById('list-music-view');

var addMusicToggle = document.getElementById('add-music-toggle');
var listMusicToggle = document.getElementById('list-music-toggle');

var addButton = document.getElementById('add-button');

addMusicToggle.addEventListener('click', function() {
	addMusicView.setAttribute('class', 'visible');
	listMusicView.setAttribute('class', 'hidden');
});

listMusicToggle.addEventListener('click', function() {
	addMusicView.setAttribute('class', 'hidden');
	listMusicView.setAttribute('class', 'visible');
});

addButton.addEventListener('click', function() {
	var songParts = document.getElementsByName('song-parts');
	var song = [];
	console.log("song components:",songParts);
	for (var i = 0; i < songParts.length; i++) {
		song.push(songParts[i].value);
	}
	song = song.join(' > ');
	filter.addSong(song);
	filter.printSongs();
});