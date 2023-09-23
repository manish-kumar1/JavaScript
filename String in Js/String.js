
// String 
// String -> string is a sequence of character. with double quotes("hello")

let firstName = "Manish";
// display length of string
console.log(firstName.length);

// display first character in string
console.log(firstName[0]);

// last character in string
console.log(firstName[firstName.length-1]);

let newName = "    Harshit    ";
console.log(newName);
console.log(newName.length);
console.log(newName[newName.length-1]); // blank

// trim() the string

let newString = newName.trim();
console.log(newString);
console.log(newString.length);

// convert string to Upper letter
console.log(newName.toUpperCase());

// convert string to lower letter
console.log(newName.toLowerCase());

// slice()
// start index
// end index

// H a r s h i t
// 0 1 2 3 5 6 7
let nayaWallah = newString.slice(0,4); // Hars
console.log(nayaWallah);


