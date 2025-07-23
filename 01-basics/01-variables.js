// const cannot be changed, they hold the assigned value at single time.
const acountnumber = 12345;

// let used as block/scope variable
let accountMail = "test@ck.com";

// var is used as global variable , do not prefer to use this. To avoid scope variable issue
var accountName = "CloudKaksha";

// not recommended
accoutCity = "Vijaypur"

let accountState;

// only one liner output, however you can add many variables. They just are not in reable format
console.log(accountMail);


//show all output at once
console.table([acountnumber,accountName,accountMail,accoutCity,accountState]);

