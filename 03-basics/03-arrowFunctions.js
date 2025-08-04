//you can use this for accessing o=attribute of current context

const obj = {
  userName : "ck",
  course : "js",

  welcomeMessage : function(){
    console.log(`${this.userName} , welcome`)
    console.log(this)
  }
}

obj.welcomeMessage()
obj.userName="newuser"
obj.welcomeMessage()

//this will be empty in vs code, but when you run this in console you can access a global object called window.
//console.log(this)


//if you are trying to access this in a function call
function chai(){
  console.log(this)
}

//chai()

//you can also declare function using arrow functions


// you cannot access this in arrow functions
const ck = () =>{
  let username = "ck"
  //console.log(this.userName)
}

//arrow function with parameter

// const addNum = (num1, num2) =>{
//   return num1 + num2
// }



//implecite return where you dont you {}

//const addNum = (num1,num2) => num1 + num2;

//you need not write return if you use (), if you use {} you need to use return.
const addNum = (num1,num2) => (num1 + num2)

console.log(addNum(1,2))
