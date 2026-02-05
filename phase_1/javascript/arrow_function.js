//callback---
function greetUser(name ,callback){
    console.log("hello" + name)
    callback()
}
function welcomeUser(){
    const name = "Halima"
    console.log("welcome" + name)
}
greetUser("Halima" ,welcomeUser)
function calculate(num1,num2 ,callback){
    const sum = num1 + num2
    callback(sum)

}

calculate(2,3 ,function(result){
    console.log("The result is" + result )
})
function sendMoney(amount,phoneNumber ,onSucess,onFail){
    let transactionAllowed = 5000
    if (amount <= transactionAllowed){
        onSucess(amount,phoneNumber)

    }
    else{
        onFail(amount)
    }
}
function sucess(amount,phoneNumber){
    console.log('sending ${amount} to $ {phoneNumber}.....')
}
function fail(amount){
    console.log('you cant send ${amount}')
}
sendMoney