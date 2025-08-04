//Immediatly Invoked Function Expression

//named IIFE, becuase function have name
(function firstMessage()
{
  console.log('Hello user');
})();

//syntax
//(functiondeclaration)()

//you can also call arrow function in iife
//if you dont give ; at the end of last function ending , you will get error, so make sure you always use ; at the end of the iife function call
//below is example of simple IIFE
(()=>{
  console.log("Hello arrow function")
})();

//if you are have parameter you can use below method

((name) => {
  console.log(`hello ${name}, welcome`);
})('ck')