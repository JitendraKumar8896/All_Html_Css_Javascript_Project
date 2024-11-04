// Variables
let P = 50000; // Principal amount
let r = 0.05;  // Rate of interest (e.g., 5%)
let n = 4;     // Number of times interest is compounded per year (e.g., quarterly)
let t = 3;     // Time in years

// Compound Interest Formula: A = P(1 + (r/n))^(nt)
let A = P * Math.pow((1 + (r / n)), n * t);

// Display the result
console.log("The compound interest after " + t + " years is: " + A.toFixed(2));
