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

// function checknum(num,clbk){
//     if(num%2==0){
//         clbk(num);
//         console.log("even")
//     }
//     else{
//         console.log("odd")
//     }
// }
// function display(value){
//     console.log("Number is:",value);
// }
// checknum(24,display);

// console.log("first")
// console.log("second")
// console.log("third")

// console.log("first")
// setTimeout(()=>(console.log("second")),1000) //asyncronous
// console.log("third")

// console.log("first")
// for(i=0;i<10;i++){
//     console.log("second")
// }
// console.log("third")

//callback hell
// setTimeout(()=>{console.log("first")
//     setTimeout(()=>{console.log("first")
//         setTimeout(()=>{console.log("first")
//             setTimeout(()=>{console.log("first")
//                 setTimeout(()=>{console.log("first")
//                     setTimeout(()=>{console.log("first")
//                         setTimeout(()=>{console.log("first")
//                             setTimeout(()=>{console.log("first")
//                                 setTimeout(()=>{console.log("first")

//                                 },1000)
//                             },1000)
//                         },1000)
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)

//Promises
// const myPromise=new Promise((resolve,reject)=>{
//     username="harsh";
//     password="234"
//     if(username=="harsh" && password=="234"){
//         resolve("success")
//     }
//     else{
//         reject("username or password is incorrect")
//     }

// })
// myPromise.then((msg)=>{
//     console.log(msg)
// }).catch((msg)=>{
//     console.log(msg)
// }).finally(()=>{
//     console.log("All the resources have been closed")
// })

async function handlelogin(){
    try{
        await myPromise
    }catch(e){
        console.log(e)
    }
    finally{
        console.log("all the resources have been closed")
    }
}
handlelogin();