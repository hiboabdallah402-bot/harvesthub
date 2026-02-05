function sayName() {
    console.log("hibo")
}
sayName()
function welcomeUser(name){
    return 'hello,welcome &(name)'
}
let message = welcomeUser("halima")
console.log(message)

function Add(num1 ,num2) {
    return num1 + num2
}
console.log(Add(4,5))
console.log(Add(6,8))
console.log(Add(9,5))
function checkAge(dateOfBirth) {
    let currentYear = "2025"
    let age = currentYear - dateOfBirth
    return age
}
let myAge = checkAge(2008)
console.log(myAge)
function calculateFinalPrice(price,percentageDiscount){
    let discount = price * (percentageDiscount)
}