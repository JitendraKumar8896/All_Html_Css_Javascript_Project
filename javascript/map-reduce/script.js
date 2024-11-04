let students =[
    {id:'001', name:'Jitendra', sports:"Cricket"},
    {id:'002', name:'Avaneesh', sports:"Chess"},
    {id:'003', name:'Vishal', sports:"Cricket"},
    {id:'004', name:'Subhash', sports:"Hocky"},
    {id:'005', name:'Awadh', sports:"Teni's"},
    {id:'006', name:'Raghav', sports:"Basketball"},
] 
// students.filter((curValue, index, array) =>{

// })

// const newArray= [];
// for(let i =0; i< students.length; i++)
// {
// 	if(students[i].id%2 == 0){
// 		newArray.push(students[i]);
// 	}
// }
// console.log(newArray);




// const newArray = students.filter((curValue) =>{
// 	if(curValue.id % 2 ==0) return true;
// 	else return false;
// })

// console.log("New array here .....");
// console.log(newArray);

const names = students.filter((curValue) => curValue.sports ==="Cricket")
.map((curValue, index, array) =>{
   return  `<li>${curValue.name}</li>`;
});
console.log(names);

const div = document.getElementById('container');
div.innerHTML =`<ul>${names.join("")}</ul>`;







