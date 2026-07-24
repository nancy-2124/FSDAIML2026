// function sum(a,b){
//     return a+b;
// }
// function sumWithMsg(clbk,msg){
//     const result=clbk(20,40);
//     console.log(msg+":"+result)
// }
// sumWithMsg(sum,"Using Calculation with js")

// function login(msg,error){
//     if(error){
//         console.log("Error is:"+error)
//     }
//     else{
//         console.log("welcome"+msg);
//     }
// }
// function loginVerification(username,password,clbk){
//     if(username=="hello" && password=="12345"){
//         clbk("Success",null);
//     }
//     else{
//         clbk(null,"Username or password is incorrect");
//     }
// }
// loginVerification("hello","12345",login)

function checknum(num,clbk){
    if(num%2==0){
        clbk(num);
        console.log("even")
    }
    else{
        console.log("odd")
    }
}
function display(value){
    console.log("Number is:",value);
}
checknum(45,display);

