//  let complete=true;
//  let prom=new Promise(function(resolve,reject){
//     if(complete){
//         resolve('I am Successful.');
//     }
//     else{
//         reject('I am failed')
//     }
//  })
//  console.log(prom)
 


// let myobj={
//     name:'Luke',
//     age:'25',
//     hobbies:'Music'
// };


// let jane={firstname:'Jane',lastname:'Doe'};
// let john={firstname:'John',middlename:'Smith', lastname:'Doe'}

// let sayname=({firstname,lastname,middlename='N/A'})=>{
//     console.log(`Hello ${firstname} ${lastname} ${middlename}`)
// }

// sayname(jane)

// const allpositivenumber=[1,2,3].every((item)=>{
//     console.log (item>1);
// })

// var nums = [1,2,2,3];
// nums.every((i,j)=>{
//     if(nums[i])
// })



// let numberarray=[1,2,3,4,5,6,7,8,9,10];
// let evennumber=[];
// for(let i=0;i<numberarray.length;i++){
//     if(numberarray[i]%2==0){
//         evennumber.push(numberarray[i])
//     }
// }
// // console.log(evennumber)

// let evennumberwithfilter=numberarray.filter((item)=>(item%2==0));
// console.log(evennumberwithfilter)


// var persons = [
//     {id : 1, name : "John", tags : "javascript"}, 
//     {id : 2, name : "Alice", tags : "javascript"}, 
//     {id : 3, name : "Roger", tags : "java"},
//     {id : 4, name : "Adam", tags : "javascript"},
//     {id : 5, name : "Alex", tags : "java"}
//   ];

//   let jstags=persons.filter((item)=>(item.tags=='javascript'));
//   console.log(jstags)

// var num=14;
// var res=Math.sqrt(num);
// if(typeof(res)=='number'){
//     console.log("Perfect square")
// }
// else{
//     console.log("Not Perfect square")
// }

// console.log(res,typeof(res))



// function isPerfectSquare(num) {
//     const squareRoot = Math.sqrt(num);
//     return Number.isInteger(squareRoot);
//   }
  
// var c = 5;

// let left=0;
// let right=Math.floor(Math.sqrt(c))
// while(left<=right){
//     var currentsum;
//     currentsum=left*left+right*right;
//     if(currentsum==c){
//         return true;
//     }
//     else if(currentsum<c){
//         left++;
//     }
//     else{
//         right--;
//     }

    
// }

// var nums=[-4,-1,0,3,10]
// nums.forEach(element => {
//     return element*element
// });
// console.log(nums)


var num=38
// // output=2;
// function sumofdigit(num){
//     var sum=0;
//     while(num>0){
//         var rem=num%10;
//         sum=sum+rem;
//         num=Math.floor(num/10);
//     }
//     console.log(sum)
//     if(sum>9){
//         console.log(sumofdigit(sum))
//     }
    
// }

// sumofdigit(num)

// var isugly=function(n){
//     var num=Math.floor(n/2);
//  if(n%2==0 || n%3==0 || n%5==0){
//     return true;
//  }
// }

// var num1='19333852702227987';
// var num2='85731737104263';
// console.log(String(Number(num1)+Number(num2)));

// const orderfood=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // const isReady=false;
//         const isReady=true;
//         if(isReady){
//             resolve('Delicious Meal');
//         }
//         else{
//             reject('Sorry, We made a mistake');
//         }
//     },3000)
// });
// orderfood.then((result)=>{
//     console.log('Sucess: ',result);
// }).catch((error)=>{
//     console.log('Error:',error)
// })

// console.log("Waiting for the food...")


// var url1='https://api.github.com/users/mralexgray/repos';
// var url2='https://api.github.com/users/mralexgray/repos';
// var url3='https://api.github.com/users/mralexgray/repos';




// const promise1=fetch('url1');
// const promise2=fetch('url2');
// const promise3=fetch('url3');

// Promise.all([promise1,promise2,promise3])
// .then((results)=>{
//     //All promise resolved successfully
//     console.log('All dat retrieved:',results)
// })
// .catch((error)=>{
//     //Atleast one promised rejected
//     console.log('An error occured: ',error)
// })


// async function getdata(){

//     const url="https://api.github.com/users/mralexgray/repos";
//     try{
//         const response=await axios.get(url)
//         var data=response.data;
//         console.log(data)
//     }
//     catch(error){
//         console.error(error)
//     }
// }
// getdata()


// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("First promise has been resolved");
//         resolve(10)
//     },3000)
// })
// let p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Second promise has been resolved");
//         resolve(20)
//     },6000)
// })



//  when Promise failed
// let p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Second promise has been failed");
//         reject('Promise Failed')
//     },6000)
// })

// let p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Third promise has been resolved");
//         resolve(30)
//     },9000)
// })

// var total=0;
// Promise.all([p1,p2,p3]).then((result)=>{
//     for(var i in result){ total=total+result[i]}
//     console.log(`Results: ${result}`)
//     console.log(total)
// }).catch((error)=>{
//     console.log(error)
// })


// const functions=require('firebase-functions')
// const admin=require('firebase-admin')
// admin.initializeApp(functions.config().firebase);
// const store=admin.firestore();

// const datetime=new Date().toISOString();
// const {log,NError,sendError,getService,getServices,createUser}=require('./util');

// const bitfinex=require('./bitfinex');
// const itbit=require('./itbit');
// const deivewealth=require('./drivewealth');
// const cryptomarketcap=require('./cryptomarketcap')


// function order(data){
//     const details={ input: data}
//     let getService
//     return Promise.resolve()
//         .then(()=>{
//             log('parse order')
//             if(data.atserviced){
//                 return Promise.all([
//                     getService(store,data.utuserid,data.atserviceid)
//                 ])
//             }
//             else if(data.atmarket){
//                 return getService(store,data.atuserid,data.atmarket)
//             }
//             else{
//                 return Promise.reject(new Error('invalid services'))
//             }
//     })
//     .then((services)=>Promise.all(
//         services.map((services)=>{
//             if(services.data.atservice==='drivewealth')
//             return deivewealth.validateSession(services).then((service)=>deivewealth.createOrder(service,data.action,data.symbol))
//         })



//     ))
//     }


//    let nan= function (query,body){
//         const state={
//             query:null,
//             body:null,
//             data:null,
//             nestedBody:null
//         }
//     }
// try{
//     state.query=Object.assign({},query || {})
//     state.body=Object.assign({},body || {})
//     state.data=Object.assign({},state.query,state.body)
//     if(typeof state.data.Body === 'string'){
//         state.nestedBody=JSON.parse(state.data.Body.replace(/^TradingView alert:/,''))
//         state.data=Object.assign({},query, state.nestedBody)

//     }
// }
// catch(err){
//     return Promise.reject(new NError('Parse request Failed - invalid nested body', err))

// }
// if(!state.data.atuserid) return Promise.reject(new NError('Parse request failed -invalid cedentials',null,state))
// return Promise.reject(new NError('invalid call', null,state))




// exports.version=functions.https.onRequest(function (request,response){
//     response.send(datetime)
// })

// exports.createUser=functions.https.onRequest(function(request,response){
//     const {email }=Object.assign({},request.query,request.body)
//     return createUser(store,email)
//     .then((atuserid)=> response.send({ atuserid }))
//     .catch(sendError(response))
// })

// exports.parse=functions.https.onRequest(function (request,response){
//     return parse(request.query, request.body)
//     .then((result)=>response.send({ result }))
//     .catch(sendError(response, 'not ok'))

    

//     exports.bitfinex_createService=functions.https.onRequest(function (request, response){
//         const { atuserid , key , secret } = Object.assign({},request.query,requestbody)
//         return bitfinex.create.createService(store,atuserid,key,secret)
//         .then((atserviceid)=>response.send({atseviceid}))
//         .catch(sendError(response))
//     })

//     exports.bitfinex_fetchBalances=functions.https.onRequest(function (request,response){
//         const { atuserid , atserviceid }=Object.assign({}, request.query , request.body)
//         return getService(store,atuserid,atserviceid)
//         .then(bitfinex.fetchBalances)
//         .then((balances)=>response.send({ balanes}))
//         .catch(sendError(response))
//     })


//     exports.bitfinex_createOrder=functions.https.onRequest(function (request,response){
//         const { atuserid, atserviceid, symbol , from , to}=Object.assign({},request.query,request.body)
//         .then((service)=>bitfinex.createOrder(services , symbol , from , to))
//         .then((order)=> response.send({ order }))
//         .catch(sendError(response))
//     })

//     exports.bitfinex_fetchTicker=functions.https.onRequest(function (request,response){
//         const { atuserid , atserviceid , symbol }=Object.assign({}, request.query, request.body)
//         return getServices(store,atuserid, atserviceid)
//         .then((service)=> itbit.fetchTicker(service,symbol))
//         .then((ticker)=> response.send({ ticker}))
//         .catch(senderror(response))

//     })

//     exports.itbit_fetchWallets=functions.https.onRequest((function (request,response){
//         const { atuserid, atserviceid, symbol,action,walletid}=Object.assign({},request.query)
//     }))

// let n = 3 // height of pattern
// let string = "";
// let count = 1;
// // External loop
// for (let i = 1; i <= n; i++) {
//   // Internal loop
//   for (let j = 1; j <= n; j++) {
//     string += count;
//     count=count+1;
//   }
 
//   string += "\n";
// }
// console.log(string);



// let n = 3; // height of the pattern
// let string = "";

// let count = 1;

// // External loop
// for (let i = 1; i <= n; i++) {
//   // Internal loop
//   for (let j = 1; j <= n; j++) {
//     if (count !== 2 && count !== 3 && count !== 6) {
//       if (count === 9) {
//         string += '10';
//       } else {
//         string += count;
//       }
//     }
//     count++;
//     if (count !== 2 && count !== 3 && count !== 6 && j <= n - 1) {
//       string += " ";
//     }
//   }

//   string += "\n";
// }

// console.log(string);


// var s=[1,2,3,4,5,6]
// var copy=[...s];
// // var s1=s;
// s.push(9)
// console.log(copy)


// let user=['Ankesh','Mihir','Himani'];
// let [e1,e2,e3]=user;
// console.log(e1)


// console.log(typeof(i))'



// var num=123;
// var sum=0
// while(num>0){
//     var rem=num%10;
//     sum=sum+rem;
//     num=Math.floor(num/10);
    

// }
// console.log(sum)
// var arr=[2,1,4,8]
// arr.push(6)
// arr.sort((a,b)=>{return a-b})
// console.log(arr)


// var sortArrayByParity = function(nums) {
//     var evenArr = [];
//     var oddArr = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 === 0) {
//             evenArr.push(nums[i]);
//         } else {
//             oddArr.push(nums[i]);
//         }
//     }

//     evenArr.sort((a, b) => a - b);
//     oddArr.sort((a, b) => a - b);

//     return [...evenArr, ...oddArr];
// };
// sortArrayByParity([3,1,2,4])



// const number=[1,2,3,4,5];
// const square=number.map((num)=>num*num);
// console.log(square)
// console.log(number)

// const number=[1,2,3,4,5];
// number.forEach((num)=>{console.log (num*num)});


 
const timestamp=Date.now();
const date=new Date(timestamp)
const formateddate=date.toLocaleString()
console.log(formateddate);

