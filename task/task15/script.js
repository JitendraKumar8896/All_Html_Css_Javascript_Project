// Select DOM elements
const greetingElement = document.getElementById('greeting');
const nameInput = document.getElementById('name-input');
const greetButton = document.getElementById('greet-button');
const redBox = document.getElementById('red-box');
const blueBox = document.getElementById('blue-box');
const greenBox = document.getElementById('green-box');
const yellowBox = document.getElementById('yellow-box');

// Function to update the greeting
greetButton.addEventListener('click', () => {
  const userName = nameInput.value;
  if (userName) {
    greetingElement.textContent = `Hello, ${userName}`;
  } else {
    greetingElement.textContent = 'Hello';
  }
});

// Function to change the box colors when clicked
redBox.addEventListener('click', () => {
  redBox.style.backgroundColor = 'red';
});

blueBox.addEventListener('click', () => {
  blueBox.style.backgroundColor = 'blue';
});

greenBox.addEventListener('click', () => {
  greenBox.style.backgroundColor = 'green';
});

yellowBox.addEventListener('click', () => {
  yellowBox.style.backgroundColor = 'yellow';
});
