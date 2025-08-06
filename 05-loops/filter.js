const coding = ["js","java","python","cpp"]

//for each will allow item to be manipulated but does not return anything
const values = coding.forEach((item)=> {
 //console.log(item);
 //return item
})


const myNums = [1,2,3,4,5,6,7,8,9,10]
//filter returns the output (with explicit return)
const newNums = myNums.filter((num)=>  num > 5 )

//if you use {} you need to use return else [] will be output becuase {} will start new scope(with return)
const newNums2 = myNums.filter((num)=> {
  return num > 5
} )
console.log(newNums)

//you can achieve same using foreach
const newNums3 = []
myNums.forEach((num)=>{
  if(num>4){
    newNums3.push(num);
  }
})

console.log(newNums3);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];


let userbooks = books.filter(
  (book)=>{return book.genre === 'History'})

userbooks = books.filter((book) => book.publish >= 2000 && book.genre ==='Science')

console.log(userbooks);





