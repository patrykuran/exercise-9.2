var femaleNames = ['Zosia', 'Krysia', 'Ula', 'Bożena'];
var maleNames = ['Paweł', 'Krzysiek', 'Marek', 'Bronek'];

var allNames = femaleNames.concat(maleNames);

var newName = 'Zbyszek';

if(allNames.indexOf(newName) === -1) {
	allNames.push(newName);
} else {
	console.log("To imię jest już w tablicy");
};

console.log(allNames);