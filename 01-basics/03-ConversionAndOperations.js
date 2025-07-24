"use strict"
let score = 33;

//convert to number it it print number if the input is number which is string
let NumberScore =  Number(score);

//convert to number it it print number if the input is number which is string, else it will print NaN (Not a Number) if input is mixer of number and string
let mix= "33acb"
let Numbermix = Number(mix);

//type of null value converted to Number it will print zero
let nullVal = null;
let NumberNullVal = Number(nullVal);

//type of bool value converted to number , it will print 1 if it is true, 0 if it is false
let boolVal = true
let NumberboolVal = Number(boolVal);

boolVal = "true"
let NumberStringBool = Number(boolVal);

console.table([NumberScore, Numbermix, NumberNullVal , NumberboolVal,NumberStringBool]);

//Converrting bool values
let isValidUser = 2
let boolIsValidUser = Boolean(isValidUser);

//if you convert a number which is greater than 1 the output is true or if it is string output is true, if it is empty string it will be false, for undefined it will NaN
console.table([boolIsValidUser]);






