"use strict";

var filter = function filter()
{
	var songs = [];
	songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator*";

	return {
		filterNonAlphaNumeric ()
		{
		    var	length = songs.length;

			for(var i = 0; i < length; i++)
			{
				var letters = songs[i].split('');
				console.log(letters);
				var filteredSong = letters.map( (letter) => {
					return letter.match(/[a-z0-9\s]/i);
				});
				filteredSong = filteredSong.join('');
				songs[i] = filteredSong;
			}
		},

		getSongs ()
		{
			return songs;
		}
	};
};

var songs = filter();
