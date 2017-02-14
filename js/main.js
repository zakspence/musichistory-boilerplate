
// Loop over the array and remove any words or characters that obviously don't belong.
// Students must find and replace the > character in each item with a - character.
// Must add each string to the DOM in index.html in the main content area.

var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("Love again (akinyele back) by Run the Jewels on the album Run the Jewels 2");
songs.unshift("Downward Spiral by Danny Brown on the album Atrocity Exhibition");

var notAChar = (char) => {
	console.log('/',char);
	console.log('the computer says the char type is',typeof char);

	var testResult = /[0-9a-z]/i.test(char);

		if (typeof char === "string" && (char === " " || testResult === true))
		{
			console.log(char,'IS an alnum or a space');
			return false;
		}
		else
		{
			console.log(char + 'is NOT alnum');
			return true;
		}
};
console.log('i\'m here');
// var notUndefined = true;
// while(notUndefined){
	for(var i = 0; i < songs.length; i++)
	{
		var allChars = songs[i].split('');

		var before = songs[i];

		for (var j = 0, length = allChars.length; j < length; j++)
		{
			var thisChar = allChars[j];
			// if (thisChar === undefined)
			// {
			// 	alert("LOOK HERE",i,j);
			// 	break;
			// }
			console.log('song '+i,'character'+j,'current song:',songs[i]);
			console.log('the neighborhood', songs[i].slice(j, j+9).toUpperCase());
			console.log('\\',thisChar);
			console.log('current index',j);
			console.log(notAChar(thisChar));

			if (notAChar())
			{
				console.log("old array",allChars);
				console.log('this index once was ',allChars[j]);
				allChars.splice(allChars[j], 1).join('');
				console.log('this index value has become',allChars[j]);
				console.log('new Array',allChars);
			}
		}
		// if(!notUndefined)
		// {
		// 	break;
		// }

		var after = allChars.join('');
		songs[i] = allChars.join('');

		console.log('before:',before);
		console.log('after:',songs[i]);
	}
// }
console.log('songsArray',songs);