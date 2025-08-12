const promiseOne = new Promise(
  (resolve,reject)=>
    {
       //do an async task
       //DBcalls, cryprograpgy, network
       setTimeout(function() {
        console.log(`async task completed`);
        resolve();
       }, 1000);
    }
);

//consumsion, if you dont resolve a promise you can consume it, line 8.
promiseOne.then(function(){
  console.log(`promise consumed`);
});

//you can also call then directly
const promiseTwo = new Promise(
  (resolve,reject) =>
  {
    setTimeout(() => {
      console.log(`direct then call`);
      resolve()
    }, 3000);
  }
).then(function(){
  console.log(`async 2 resolved`)
})


//when then is called seperatly you can pass data uisng resolve.
const promiseThree =  new Promise(
  (resolve, reject)=>{
    setTimeout(() => {
      resolve({
        userName : "CloudKakshaa",
        course : "JavaScript"
      })
    }, 4000);
  }
)

promiseThree.then((data) => {
  console.log(data);
  
});

//how to use reject
const promiseFour = new Promise(
  (resolve,reject) =>{
    setTimeout(() => {
      let error = true;
      if(!error){
        resolve({
          message :  `Promise resolved without error`
        })
      }
      else{
        reject({
          message :  `Something went wrong`
        })
      }
    }, 5000);
  }
);

//you can not directly access the data you have to do the chaining by calling then() again
const msg = promiseFour.then((data) => {
  return data.message;
})

msg.then((data)=>{
  console.log(data);
}).catch(function(err){
  console.log(err);
  
}).finally(()=>{
  console.log(`finally promiseFour is completed`);
  
});

const promiseFive =  new Promise(
  (resolve,reject)=>{
    setTimeout(function(){
       let error = true;
       if(!error)
       {
       resolve({
        userName : "JS",
        password : 'Welcome123'
       })
      }
      else{
        reject(`error in promiseFive`)
      }

    },6000);
  }
)

//async will wait for promise function to execute,
//the reject message will be given in catch
async function consumePromiseFive()
{
  try{
  const response =  await promiseFive;
  console.log(response);
  }
  catch(err){
    console.log(err);
    
  }
  
}

consumePromiseFive()

async function getAllUsers(){
  try {
     const response = await fetch('https://jsonplaceholder.typicode.com/todos');
     const data = await JSON.parse(response);
     console.log(data);
   
  } catch (error) {
    console.log(`error in fetching user data`);
  }
}

getAllUsers();


//This will take very less time and return the value at first
fetch('https://jsonplaceholder.typicode.com/todos')
.then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data);
  
})
.catch((err)=>{
  console.log(`error in fetch`);
  
})