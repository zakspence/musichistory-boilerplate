"use strict";

var filter = function filter()
{
	var songs = ["Legs > by Z*ZTop on the album Eliminator*"];
	return {
		filterNonAlphaNumeric ()
		{
			var letters = songs[0].split('');
			console.log(letters);
			var filteredSong = letters.map( (letter) => {
				return letter.match(/[a-z0-9\s]/i);
			});
			filteredSong = filteredSong.join('');
			songs[0] = filteredSong;
		},

		getSongs ()
		{
			return songs;
		}
	};
};

var songs = filter();