
//The way objects are declared.
//1.singleton : object cleared using constructor
//2. object literals : other way to declare object

//Object.create --> singleton method


const mysymbol = Symbol("mySym")
//below is ex of literals 
const ckUser = {
  name : "CloudKaksha",
  "Last Name" : "Kaksha",
  //symbols should be declared in []
  [mysymbol] : "symbol1",
  age : 22,
  location : "Newyork",
  email : "ck@gmail.com",
  isloggedIn : true,
  lastLoginDays : ["Monday","Friday"]
}

//there are two way to access object
// console.log(ckUser.email);
// console.log(ckUser["email"]);
// console.log(ckUser["Last Name"]);
// console.log(ckUser[mysymbol]);
//console.log(typeof ckUser[mysymbol]);

//change values of object
//you can freeze an object if you do want to change

ckUser.email = "cloudkaksha@gmail.com"
//Object.freeze(ckUser);



//you can also add a function as an object

ckUser.newFunction = function()
{
  console.log("Hello new function");
  
}

//this will give function referrence 
console.log(ckUser.newFunction)
//this will give function output
console.log(ckUser.newFunction());

//you can access the properties of object using this if you are trying to refer same object in object function

ckUser.secandFunction = function()
{
  console.log(`Hello ${this.name}, welcome to secand function`)
}

console.log(ckUser.secandFunction())

