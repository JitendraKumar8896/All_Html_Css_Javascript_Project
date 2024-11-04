const calculate =(a,b, operation) => {
    return operation(a,b);

};
// method 1
// const addition = calculate(5,6, function(num1, num2){
//  return num1 + num2;

// });
// console.log("Addition:",addition);
// //method 2
// const subtract =(a,b) => a-b;
// const subresult = calculate(8,5, subtract);
// console.log("subtraction:",subresult);

// //method 3
// function multiply(a,b){
// 	return a*b;
// }

// const multresult =calculate(66,3,multiply);
// console.log("multiply:",multresult);


//const a = [4,5,-6,7,8,-1,9,2,3];
// const firstNeg = (num) =>{
// 	return num < 0;
// }
// const res = a.findIndex(firstNeg);
// console.log("Res:", res);

// foreach

// a.forEach((num,i)=> {
// 	console.log("Array num:", num, i);

// });
    // HEll CALLBACK
// console.log("Hello");
// setTimeout(function (){
// 	console.log("This will excute latter");

// }, 3000);
// console.log("world");
// console.log("three");


// function getCheese(callback){
// 	setTimeout(() => {
//          const cheese ="shoe";
//          console.log("here is cheese", cheese);
//          callback(cheese);
// 	},2000);
// }
// // console.log(getCheese());
// getCheese((cheese) => {
// 	console.log("got the cheese", cheese);
// });

// Promises

const ticket = new Promise(function (resolve, reject){
	const isBoarded = false;
	if(isBoarded){
		resolve('You are not in the flight');
	}
	else{
		reject('Your flight has been cancelled');
	}
});

ticket
     .then((data) =>{
        console.log("Wohoo", data);
     })
    .catch((data) => {
         console.log("oh no", data);
    
    })
    .finally(() => {
    	console.log("i will always be excuted");
    })























