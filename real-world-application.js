/*Imagine you work for Crayola and your boss just told you that the Crayola1990 API needs to have a url slug generated for all of the colors names.
* To do this you need to lowercase and hyphenate each color in the following array.
* You can not edit the values in the array by hand as your boss is wanting a loop that can be applied to any set of crayola boxes in the future
*/
var crayola1990 = [
	'Scarlet',
	'Sunset Orange',
	'Vivid Tangerine',
	'Macaroni and Cheese',
	'Mango Tango',
	'Banana Mania',
	'Dandelion',
	'Canary',
	'Inchworm',
	'Asparagus',
	'Granny Smith Apple',
	'Fern',
	'Shamrock',
	'Mountain Meadow',
	'Jungle Green',
	'Caribbean Green',
	'Tropical Rain Forest',
	'Robins Egg Blue',
	'Teal Blue',
	'Outer Space',
	'Pacific Blue',
	'Cerulean',
	'Denim',
	'Wild Blue Yonder',
	'Indigo',
	'Manatee',
	'Blue Bell',
	'Purple Heart',
	'Royal Purple',
	'Wisteria',
	'Vivid Violet',
	'Purple Mountains Majesty',
	'Fuchsia',
	'Pink Flamingo',
	'Jazzberry Jam',
	'Eggplant',
	'Cerise',
	'Wild Strawberry',
	'Cotton Candy',
	'Razzmatazz',
	'Pig Pink',
	'Blush',
	'Tickle Me Pink',
	'Mauvelous',
	'Pink Sherbert',
	'Fuzzy Wuzzy',
	'Beaver',
	'Tumbleweed',
	'Desert Sand',
	'Almond',
	'Shadow',
	'Timberwolf',
	'Antique Brass'
];

//create a loop that will iterate over each item in the array and then use the String methods to modify the value at the current position in the array

/***** HINTS *******
 * remember strings are immutable but the value of a variable can be adjusted as often as needed.
 * take advantage of the methods available on stings http://www.w3schools.com/js/js_string_methods.asp
 * there are multiple ways to do something like this but you might consider using split and join
 */ 