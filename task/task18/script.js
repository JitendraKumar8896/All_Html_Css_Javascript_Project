// question 1

// let numbers = [1, 2, 3, 4, 5];

// // Using map with arrow function to square each element
// let squaredNumbers = numbers.map((num) => num * num);

// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


// Question 2

// function getGrade(score) {
//   return score >= 90 ? 'A' :
//          score >= 80 ? 'B' :
//          score >= 70 ? 'C' :
//          score >= 60 ? 'D' : 'F';
// }

// console.log(getGrade(95)); // Output: A
// console.log(getGrade(85)); // Output: B
// console.log(getGrade(75)); // Output: C
// console.log(getGrade(65)); // Output: D
// console.log(getGrade(55)); // Output: F


//Question 3

// // Car object with properties
// let car = {
//   company: "Toyota",
//   model: "Corolla",
//   year: 2020
// };

// // Function to change the car's year property
// function changeYear(newYear) {
//   car.year = newYear;
// }

// // Change the car's year to 2023
// changeYear(2023);

// // Use object destructuring to extract model and year
// const { model, year } = car;

// // Print the model and year
// console.log(`Model: ${model}, Year: ${year}`);

// // Output:
// // Model: Corolla, Year: 2023

//Question 4


// function isPrime(num) {
//   if (num <= 1) return false;  
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return false; 
//     }
//   }
//   return true;
// }

// // Given array of numbers
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13];

// // Use filter function to get only prime numbers
// let primeNumbers = numbers.filter(isPrime);

// console.log(primeNumbers); // Output: [2, 3, 5, 7, 11, 13]

//Question 5

// let numbers = [1, 2, 3, 4, 5];
// let squared = numbers.map(num => num * num);
// console.log(squared); // Output: [1, 4, 9, 16, 25]



// let evenNumbers = numbers.filter(num => num % 2 === 0);
// console.log(evenNumbers); // Output: [2, 4, 6]


// let sum = numbers.reduce((acc, num) => acc + num, 0);
// console.log(sum); // Output: 15


//Question 6
// Asynchronous function to fetch data from JSONPlaceholder API
// async function fetchData() {
//   try {
   
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
  
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

    
//     const data = await response.json();

  
//     console.log(data);
//   } catch (error) {
    
//     console.error('Error fetching data:', error);
//   }
// }


// fetchData();

//Question 7
let person = {
  name: "Jitendra Kumar",
  address: {
    street: "sector 19",
    city: "Noida",
    zip: "201301"
  },
};

let phoneNumber = person.contact?.phone;

console.log(phoneNumber);


