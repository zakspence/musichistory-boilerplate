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
