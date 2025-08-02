//how to declare obj using singleton method

//const newUser = new Object(); just ex , coninue using literal menthod

const newUser = {}
newUser.id = "ck_1234";
newUser.email = "newUser@gmail.com"

// you can declare object within object
const nestedObjUser = {
  email : "nestedObjUser@gmail.com",
  fullName : {
   firstName : "Cloud",
   lasstName : "Kakshaa"
   }
} 
//you can use ? to handle null referrence , below is the case checks if full name exists.

console.log(nestedObjUser.fullName?.firstName)

//you can also combine obj
const obj1 = {
  1: "a",2 :"b"
} 

const obj2 = {
  3: "c",4 :"d"
}


//The first parameter is always target and other paramters are sources. {} means the first object is alway storing combined results
//if {} not given in below example, obj1 will be modified.
const obj3 = Object.assign({},obj1,obj2) 

console.log(obj3)

//you can also use spread operator to combine objects

const obj4 = {...obj1,...obj2}
console.log(obj4);

//you can access key and values using Object methods

console.log(Object.keys(newUser)) // always gives array of keys 
console.log(Object.values(newUser)); //array of mixed elements

//to check if any propery exists
console.log(newUser.hasOwnProperty("id"));

//you can access more props and function in console












console.log(newUser);
