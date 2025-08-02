

//the veraibles in [] are called eements.
//They can be of any time
//They can be resized
//Array copy create shallow copy, means they are stored in heap memory.
const myArr = [0,10 ,20, 30, 40, 50]
const mixArr = [0, true, "Hi"]

//other way of declaring array
const methodarr2 = new Array(1,"hi",true);

//push will add a new value
myArr.push(60)
myArr.push(7)

//pop will delete last element
myArr.pop()

//it insert value at start of array and shift other element. This cause overhead on array with large element. This can be used with small array or to do kind of lists.
myArr.unshift(9);

//remove first element and shift indicises
myArr.shift()

//bool functions of array
//1. includes - check if parameter is in the array and returns  bool value.

console.log("includes function output " + myArr.includes(0)
)

//indexOf - gives index pf the paremeter. Returns interger . -1 if not found
console.log("Output of indexOf is " +myArr.indexOf(60))

//3.slice - This will not manupilate the orginal array and provide output from provided indicises. However the last range is not included. it will be range-1
const slicedArrr  = myArr.slice(1,3)
console.log("output of slice : "+slicedArrr)

//4.splice = This will manupilated the original array and display all the elements from given index range and alos remove it from original array. Here range is included.
const splicedArr = myArr.splice(1,3)
console.log("output of splice : "+splicedArr);console.log("output of original array after splice : "+myArr)

console.log(myArr)

