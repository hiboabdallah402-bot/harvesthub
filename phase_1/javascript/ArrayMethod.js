// let numbers = [1,2,3,4,5];
// let doubleNumbers = numbers.map(function(number) {
//     return number ** 2;
// })
// console.log(doubleNumbers)
let student = ["halima" ,"hafsa" ,"abdi" ,"fatxi"]
great = student.forEach(student => {
    console.log(student)
});
let numbers =[10 ,20 ,30 ,40 ,50]
let sum = numbers.reduce(function (_accumulator ,currentValue){
    return _accumulator + currentValue
})
let transaction = () => {
    return sum / numbers.length
}

let ages =[15 ,22 ,18 ,25 ,30 ,16 ,28]
let canVote = ages.filter(function (age){
    return age >= 18
})
console.log(canVote)
