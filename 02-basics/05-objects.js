//object destructure

const course = {
  name : "JS",
  price : "6999",
  instructor : "Seema"
}

//you can rename the instructor like below and access directly without "."
const {instructor : courseInstructor} = course

console.log(courseInstructor);
