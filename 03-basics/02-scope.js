//it is very important that we declare variabled in right place

let a= 10;
const b= 20;
var c= 30;

//let should be declared in a scope start from { and ends in } 
//The reason we use scope is that we need to avoid rewiritng it through the out the program. The varible defined in {} are block scope and the varible declared out { } are global
if(true){

  //a=30;
  let a = 30
  console.log(`block scored a : ${a}`)

}

console.log( `global scoped a : ${a}`)

//nested scope

//below function call gives error. The reason is we are trying to access parent nest variable in child function. However, we need to know that the varible declared in parent can be accessed by child , the reverse is not possible. check by commenting the line where we are printing parent variable in child function.

function one(){
  const userName = "ck";

  function two()
  {
    const website = "online"
    console.log(userName)
  }

  console.log(website)

  two()
}

//one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    //gives error
    //console.log(website);
}

//gives erro
//console.log(username);


console.log(addone(5))

function addone(num){
    return num + 1
}


//calling this function gives error if you try to call a function defined in a variable before actual function
addTwo(5)
const addTwo = function(num){
    return num + 2
}