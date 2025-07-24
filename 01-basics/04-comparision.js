// > < >= <= == != , they will either true or false when compared with same datatype
//when you use different datatype the output is different

console.log("2"==2);
console.log(null > 0);
console.log(null >= 0 ); // null is converted to number 0 by js hence this will be true

console.log(undefined == 0) // with undefined you will always get false
console.log(undefined > 0) // with undefined you will always get false
console.log(undefined < 0) // with undefined you will always get false


// you can use === to strictly check by comparing same datatype
console.log("2" === 2); 
