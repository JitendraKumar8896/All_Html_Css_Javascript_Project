
function maximumNumberArray(arr)
{
	let max = arr[0];
	for(let i =1; i<=arr.length; i++){
       if(arr[i] > max){
           max = arr[i];
       }
	}
	return max;
}

const arr=[22,4,55,6,7,9,2,1,3];
console.log("Maximum number:",maximumNumberArray(arr));

function sumOfAllElement(arr){
   let sum =0;
   for(let i = 0; i < arr.length; i++){
       sum += arr[i];
   }
   return sum;
}

console.log("sum of all element:", sumOfAllElement(arr));

function countOddInArray(arr){
	let count =0;
	for(let i =0; i< arr.length; i++)
	{
		if( arr[i]%2 === 1)
		{
			count++;
		}
		
	}
	return count;
}
console.log("Count of odd numbers:",countOddInArray(arr));
