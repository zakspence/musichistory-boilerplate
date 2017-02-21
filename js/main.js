
// Loop over the array and remove any words or characters that obviously don't belong.
// Students must find and replace the > character in each item with a - character.
// Must add each string to the DOM in index.html in the main content area.

var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator*";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

songs.push("Love again (akinyele back) by Run the Jewels on the album Run the Jewels 2");
songs.unshift("Downward Spiral by Danny Brown on the album Atrocity Exhibition*");

const notAChar = (char) => {
	console.log('5 /',char);
	console.log('6 the computer says the char type is',typeof char);

	var testResult = /[0-9a-z]/i.test(char);

		if (typeof char === "string" && (char === " " || testResult === true))
		{
			console.log('7',char,'IS an alnum or a space');
			console.log('STOP');
			return false;
		}
		else
		{
			console.log('7',char + 'is NOT alnum');
			return true;
		}
};
console.log('i\'m here');
// var notUndefined = true;
// while(notUndefined){
	for(var i = 0; i < songs.length; i++)
	{
		let allChars = songs[i].split('');

		var before = songs[i];

		for (var j = 0, length = allChars.length; j < length; j++)
		{
			console.log('j loop length:',length);
			var thisChar = allChars[j];
			// if (typeof thisChar === "undefined")
			// {
			// 	notUndefined = false;
			// 	alert("LOOK HERE");
			// 	console.log('LOOK HERE',i,j);
			// 	console.log(thisChar, typeof thisChar, (thisChar === "undefined"));
			// 	break;
			// }
			/* Right here is my console log output for the above spot of code. I only get this when i get the very end of the array. since i have sliced off the current index, the value of allChars[j] is undefined, because that index value is equal to allChars.length; it is one more than the largest index value. Only then will thisChar come out as undefined in the "j" loop.

					console output:
					/ undefined
					main.js:19 the computer says the char type is undefined
					main.js:30 undefinedis NOT alnum
					main.js:62 old array ["o", "n", " ", "t", "h", "e", " ", "a", "l", "b", "u", "m", " ", "A", "t", "r", "o", "c", "i", "t", "y", " ", "E", "x", "h", "i", "b", "i", "t", "i", "o", "n"]
					main.js:63 this index once was  n
					main.js:65 this index value has become undefined
					main.js:66 new Array ["n", " ", "t", "h", "e", " ", "a", "l", "b", "u", "m", " ", "A", "t", "r", "o", "c", "i", "t", "y", " ", "E", "x", "h", "i", "b", "i", "t", "i", "o", "n"]
					main.js:50 LOOK HERE 0 32
					main.js:51 undefined "undefined" false

			The weird thing is, the exact
			 */
			console.log('START');
			console.log('1 song '+i,'character'+j,'current song:',songs[i]);
			console.log('2 the neighborhood', songs[i].slice(j, j+9).toUpperCase());
			console.log('3 \\',thisChar);
			console.log('4 current index',j);
			let notACharValue = notAChar(thisChar);
			console.log('8',notACharValue);

			if (notACharValue)
			{
				console.log("9 old array",allChars);
				console.log('10 this index once was ',allChars[j]);
				console.log('j',j);
				allChars.splice(allChars[j], 1);
				console.log('11 this index value has become',allChars[j]);
				console.log('12 new Array',allChars);
				console.log('STOP');
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
