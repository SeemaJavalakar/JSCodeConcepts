const name = "CK";
const repoCount = 50

console.table([name,repoCount]) // not recommended

//interpolation is recommended
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const courseName = new String('JavaScript');
//when you log a String , it will be an arrray of charectors, so courseName[0] will be J
console.log(courseName);
console.log(courseName.__proto__);




console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const mySite = new String('CloudKaksha-hc-com')

// console.log(courseName[0]);
// console.log(courseName.__proto__);


// console.log(courseName.length);
// console.log(courseName.toUpperCase());
console.log(mySite.charAt(2));
console.log(mySite.indexOf('t'));

const newString = mySite.substring(0, 4)
console.log(newString);

const anotherString = mySite.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   CloudKaksha    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://CloudKaksha.com/Java%20Script"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(mySite.split('-'));


