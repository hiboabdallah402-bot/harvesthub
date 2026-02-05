//Object -- is used any where you take the variable as an object.
//subaru --properties-(color,model) methods-(move,stop,size)
//properties--(walking,eating,sleeping).
//object within an object nested object
let student = {
    name:"Balkheisa",
    age:20,
    address:{
        POBox:"46587",
        constituency:"Township",
        home:"Bula sagaray"
                                        
    }
}
console.log(student.name)
console.log(student.age)
console.log(student.address)
//Array within an object
let lectures = {
    name:"Mr .Muhamud",
    age:"60",
    hobbies:["Teaching","Reading","studying"]

}
console.log(lectures.name)
console.log(lectures.hobbies[1])
console.log(lectures.hobbies[2])
//object inside an array 
let cars = [
    {
        name:"BMW",
        model:"New model",
        year:2017
    },
    {
        name:"saburu",
        model:"old model",
        year:'2018'

    },
    {
        name:"probox",
        model:"latest model",
        year:'2022'
    },
] //added semicolon to the end of the arraydeclaration
    console.log(cars[1],model); //Removed the extra dot before the bracket
    let fruit = [
        {
            name:"Banana",
            type:"ripe",
            color:"green",
        },
        {
            name:"Mango",
            type:"unripe",
            color:"yellow",
        },
        {
            name:"Apple",
            type:"unripe",
            color:"red"
        }
    ]
    console.log(fruit[1],type)




































console.log("text1")
console.log("text2")
console.log("text3")
console.log("text4")