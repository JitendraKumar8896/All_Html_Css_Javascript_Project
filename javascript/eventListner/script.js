// function myFunction(){
// 	console.log("I was cicked!");
// }

// const mouseOver = () => {
//    console.log("mouse over");

// }


// event listerner

const box1 = document.getElementById('red-box');
box1.addEventListener("mouseover", (e) =>{
	console.log("event object", e.clientX, e.clientY);
});

box1.addEventListener("click", () =>{
	console.log("click by event");
});


