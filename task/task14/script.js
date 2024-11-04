// Arrow function to perform division using Promises
const divide = (num1, num2) => {
  return new Promise((resolve, reject) => {
    if (num2 === 0) {
      reject("Error: Division by zero is not allowed.");
    } else {
      const result = num1 / num2;
      resolve(result);
    }
  });
};

// Function to test the division with different inputs
const testDivision = (num1, num2) => {
  console.log(`Dividing ${num1} by ${num2}...`);
  divide(num1, num2)
    .then(result => {
      console.log(`Result: ${result}`);
    })
    .catch(error => {
      console.log(error);
    });
};

// Test cases
testDivision(10, 2); 
testDivision(10, 0); 
testDivision(25, 5); 
testDivision(100, -10); 
testDivision(0, 3); 
