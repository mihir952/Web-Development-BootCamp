// function sayhii(){
//     alert("Hello Mihir!!")
// }
// setTimeout(sayhii,2000)



// let mypromise=new Promise(function(myResolve,myReject){
//     let x=0;
//     if(x==0){
//         myResolve("OK");
//     }
//     else{
//         myReject("Error")
//     }
// })


// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("foo");
//     }, 300);
//   });
  
//   myPromise
//     .then(handleFulfilledA, handleRejectedA)
//     .then(handleFulfilledB, handleRejectedB)
//     .then(handleFulfilledC, handleRejectedC)
    

//     const aThenable={

//         then(onFulfilled,onRejected){
//             onFulfilled({
//                 then(onFulfilled,onRejected){
//                     onFulfilled(42);
//                 }
//             })
//         }
//     };
//     Promise.resolve(aThenable);

//     const promiseA=new Promise(myExecutorFunc);
//     const promiseB=promiseA.then(handleFulfilled1,handleRejected1);
//     const promiseC=promiseA.then(handleFulfilled2,handleRejected2);


//     const promiseA=new Promise((resolve,reject)=>{
//         resolve(777);
//     });

    // promiseA.then((val)=>console.log("asynchronous logging has val: ",val));
    // console.log("immediate Logging");

    //produces output in this order:
    // immediate logging
    // asynchronous logging has value : 777

    // const promiseA=new Promise(myExecutorfunc);
    // const promiseB=promiseA.then(handleFulfilled1,handleRejected1);
    // const promiseC=promiseA.then(handleFulfilled2,handleRejected2);

    // myPromise
    // .then((value)=>`${value} and bar`)
    // .then((value)=>`${value} and bar again`)
    // .then((value)=>`${value} and again`)
    // .then((value)=>{
    //     console.log(value);
    // })
    // .catch((err)=>{
    //     console.error(err);
    // });


    // The Javascript ecosysystem had made multiple Promise implementations long before it became part of the language.
    // Despite being represented diffrently internally , at the minimum, all Promise-like objects implement the Thenable interface.A Thenable implements the .then()
    // PaymentMethodChangeEvent,which is called with two Callbacks:one for the promise is fulfilled ,one for 
    // when it's rejected 

//string literal
// let fname="mihir";
// let lname="kumar";
// var company='valtech'
// function fullname(fname,lname){
//     return `${fname} ${lname}`
// }
// var hello=`Hii ${fullname(fname,lname)} working at ${company}`;
// console.log(hello)

// let hello=()=>{console.log('hello')}
// hello();



///arrow Function
// let welcome =(name)=>{
//     return `Hello ${name}`
// }
// console.log(welcome('mihir'))
// console.log(typeof(welcome))

// function sum(num1,num2){
//     console.log(num1+num2)
// }
// sum(14,6,9)


// function sum(){
//     let sum=0;
//     for(let i in arguments) {
//         sum=sum+arguments[i]
//     }
//     console.log(sum)
// }
// sum(1,2,3,4,5,6,7,8,9)

// let sum=(name,...args)=>{
//     let sum1=0
//     for(let i in args){
//         sum1=sum1+args[i]
//     }
//     console.log(sum1)
//     console.log(name)
// }

// sum('mihir',1,2,3,4,5,6,7,8,9)


// var arr1=[10,20,30,40];

// var arr2=[...arr1];
// arr1.push(50)
// console.log(arr1)
// console.log(arr2)
// var sum=0;
// for(let i in arr1){
//     sum=sum+arr1[i]
// }
// console.log(sum)


//  var obj1={
//     name:'Mihir',
//     lname:'Kumar'
//  };
//  var obj2={
//     company:'Valtech',
//     location:'Bangalore'
//  }
//  var obj3={...obj1,...obj2}
//  console.log(obj3)
//  console.log(obj1.name)

// let name='Mihir';
// let company='valtech';
// var obj={
//     name,
//     company,
// }
// console.log(obj)

// let user=['mihir',24,'bangalore']
// let [name,age,city]=user;
// console.log(name,age,city)


let user={
    name:'Mihir',
    age:24,
    location:'Bangalore'
}
// console.log(user.name)
// let {name,age,location}=user;
// console.log(name);
// console.log(age,location)

// console.log(Object.entries(user).length);
// let obj=[1,2,3,4,5]
// console.log(Object.entries(obj).length);

// console.log(user.hasOwnProperty('name'));

// let person=Object.create(null);
// console.log(Object.entries(person).length);



// let details={
//     name:'Mihir',
//     company:'VAltech',
//     location:'Bangalore'

// }

// let {name:n,company:com,location:loc}=details;
// console.log(n,com,loc)


// var multiply = function(num1, num2) {
//     var val1=Number(num1);
//     var val2=Number(num2);
//     var res=val1*val2;
//     console.log( String(res));
// };
// multiply(10,15)


// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// var nums=[2,3,-2,4]
// let result=nums[0];
// for(let i=0;i<nums.length;i++){
//     let mul=nums[i];
//     for(let j=i+1;j<nums.length;j++){
//         result=Math.max(result,mul);
//         mul=mul*nums[j];
//     }
//     result=Math.max(result,mul)
// }
// console.log(result)



///OOP Concept in Javascript
//   class hello{
//     constructor(){
//         let name;
//         console.log('constructor calling....')
//     }
//     message(){
//         console.log("hello Mihir"+ this.name)
//     }
//   }
//   let a=new hello();
//   a.name='kumar'
//   a.message();




//some advanced form of js
// class hello{
//     constructor(name,age){
//         this.lastname=name;
//         this.myage=age;
//         console.log('constructor calling....')
//     }
//     message(){
//         console.log(`hello Mihir  ${this.lastname}`)
//     }
//     normal(){
//         console.log(`My name is ${this.lastname} and my age is ${this.myage}`)
//     }
//     static staticmethod(){
//         console.log("Static Method Called....")
//     }
//   }
//   let a=new hello('kumar');
//   a.message();
//   let b=new hello('Gupta',23)
//   b.normal()
//   hello.staticmethod()




//// Inheritence
// class company{
//     constructor(){
//         console.log("Parent Class Inheritence")
//     }
// }
// class valtech extends company{

// }
// let a=new valtech()

// this(testname,selector,['array','of','ids']);
// this('check for something','//[a]',['foo','bar'])
// firenative(jQuery('#elem')[0],'click');
// url('some/url');
// testframe(testName,fileName,function testCallback(
//     assert,jQuery,window,document,[additional, args]){
        
//     }
// )
// ok(value,[message]);
// equal(actual,expected,[message]);
// notEqual(actual,expected,[message]);
// deepEqual(actual,expected,[message]);
// notDeepEqual(actual,expected,[message]);
// strictEqual(actual,expected,[message]);
// notStrictEqual(actual,expected,[message]);
// throws(block,[expected],[message]);



//Here We Cant assign two constructor in one class 
// class Name{
//     constructor (name){
//         console.log('Mihir Kumar'+ name)
//     }
//     // constructor(){
//     //     console.log('another Constructor CAlling')
//     // }
// } 
// class LastName extends Name{

// }

// let a1=new LastName('Gupta');




const foo=function* (){
    yield 'a';
    yield 'b';
    yield 'c';

};
let str='';
for(const val of foo()){
    str=str+val;
}

console.log(str);
