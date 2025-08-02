const myArr = ["str1","str2","str3","str4"];
const myArr2 =  ["string1","string2","string3","string4"]
//push will add entire element at end to the original array. Below we have added stringarray , it will add string array itself.
const pushArr = myArr.push(["str5","str6","str7"])
console.log("orginal Array : ",myArr);

//concat append new values as single elements and do not changes original array.
const concarArray =  myArr.concat(["str5","str6","str7"])
console.log(concarArray)
console.log(myArr);

//spread operator add new values to existing array. Contat does same but spread operaor is widely used
const spreadArray= [...myArr,...myArr2]
console.log("spread array: ",spreadArray)


//if you have array withing array (nested array) , flat will give you one single array , you just have to define the dept. and infinity paramerer is used for considering all depths.

console.log("flat array : " , myArr.flat(Infinity))

console.log(Array.isArray(myArr));
console.log(Array.from("CloudKaksha"))
console.log(Array.from({name:
  "CloudKaksha"}))//cannot create from object., you need mention whether array being created should consider key or value.

  //you can also create array from variables.
  let var1 = "var1"
let var2 = "var2"
let var3 = "var3"
console.log(Array.of(var1,var2,var3))



