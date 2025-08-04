//if you are not sure what you be passing to function you use rest operator, rest operator return array

function calculateCartPrice(...num1){
 return num1
}
console.log(calculateCartPrice(100,200,300));
function calculateCartPriceWithVal(val1, val2,...num1){
  return num1
}
console.log(calculateCartPriceWithVal(100,200,300));

//passing object

const user = {
  name: "cloudKakshaa",
  course : "JavaScript"
}

//you need access only attribute defined in object
function handleObject(anyObject)
{
  console.log(`User name is ${anyObject.name} course is ${anyObject.course}`);
  
}

handleObject(user);

//passing array to function

const myNewArray = [100,200,300,400]

function returnArray(getarray){
  return getarray[1]
}

console.log(returnArray(myNewArray))


