//1. Using dot and bracket notation modify the existing object values to replace the information with your own

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};
// ANSWER
me.name = 'katie',
me.age = 22,
me["hair color"] = 'blonde'
console.log(me);

//ANSWER

//2. Iterate over the object to console.log the propery or key names. 

//ANSWER
function showProps(obj, objName) {

    var result = "";
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            result += objName + "." + i + " = " + obj[i] + "\n";
        }

    }
    console.log(result);
}
showProps(me, "me")

//ANSWER