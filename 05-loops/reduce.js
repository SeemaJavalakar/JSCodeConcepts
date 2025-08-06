
const myNum = [1,2,3]
const initialVal = 0

const newNum = myNum.reduce(
  (accumulator, currentVal) => 
    {
       console.log(`accumulator ${accumulator} and current  value ${currentVal}`);
       
       return currentVal + accumulator 
     },initialVal
)

console.log(newNum);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
