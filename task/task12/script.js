function sumOfFirstNNumbers(num) {
 let sum =0;
 for(let i =1; i<= num; i++){
   sum = sum +i;
  }
  return sum; 
}

function printTable(num1){
	console.log("Table of", num1, "numbers is:");
	let mult=1;
	for(let i=1; i< 10; i++){
       mult = num1*i;
       console.log(mult);
	}
	
}

function isPrime(num){
	if(num <= 1)
	{
		return false;
	}
	if(num <= 3)
	{
		return true;
	}
   if(num % 2===0 || num % 3 ===0)
   {
   	return false;
   } 
   for(let i = 5; i * i <= num; i +=6){

   	if(num % i === 0 || num % (i + 2) ===0)
   	{
   		return false;
   	}
   	return true;
   }

}

function printFactors(n){
	const factors=[];
	 for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

function sumOfDigits(n){
	let sum =0;
	while( n > 0){
		let lastDigit = n % 10;
        sum += lastDigit;
        n = ( n - lastDigit) /10; 
  }
  return sum;
}



function isArmstrongNumber(n) {
    let sum = 0;
    const arm = n; 

    // Handle negative numbers
    if (n < 0) {
        return false;
    }

    
    while (n > 0) {
        const digit = n % 10; 
        sum += digit * digit * digit; 
        n = Math.floor(n / 10); 
    }
     if(sum === arm){
     	  return "Yes";
     }
    
    else{
    	return "No";
    }
}






const num = 153; 
const num1= 15;
const num2= 139;
const num3= 115;
const num4 = 224
console.log("Sum of first", num, "numbers is:", sumOfFirstNNumbers(num));
console.log(printTable(num1));
console.log(" it is prime number :", isPrime(num2));
console.log("Factors", printFactors(num3));
console.log("Sum of digits :", sumOfDigits(num4));
console.log( "It is an Armstrong number:", isArmstrongNumber(num));



