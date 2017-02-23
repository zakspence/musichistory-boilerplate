"use strict";

var filter = function filter()
{
	var songs = [];
	songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator*";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("Love again (akinyele back) by Run the Jewels on the album Run the Jewels 2");
songs.unshift("Downward Spiral by Danny Brown on the album Atrocity Exhibition*");

	return {
		filterNonAlphaNumeric ()
		{
		    var	length = songs.length;
		    var filteredSong = [];

			for(var i = 0; i < length; i++)
			{
				console.log(songs[i].match(/\u003E/));
				if ( songs[i].match(/\u003E/) )
				{
					songs[i] = songs[i].replace(/\u003E/g, '-');
					console.log(songs[i]);
				}
				var letters = songs[i].split('');
				filteredSong = letters.map( (currentLetter) => {
					return currentLetter.match(/[a-z0-9\s\u002D]/i);
				});
				filteredSong = filteredSong.join('');
				songs[i] = filteredSong;
			}
		},

		getSongs ()
		{
			return songs;
		},

		printSongsToDom ()
		{
			var songCard =
			$('#song-display').
		}
	};
};

var songs = filter();
