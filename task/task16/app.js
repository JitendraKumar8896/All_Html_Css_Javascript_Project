// Array of student objects
const students = [
    { name: 'Jitendra Kumar', marks: 85, class: '10th', address: 'Sector 19, Noida' },
    { name: 'Aman chaurasiya', marks: 90, class: '10th', address: 'Vaishali, Delhi' },
    { name: 'Vishal sharma', marks: 78, class: '11th', address: 'Rajiv chauk, Gurugram' },
    { name: 'Avaneesh chauhan', marks: 92, class: '12th', address: '1010 Road, Pune' },
    { name: 'Vijendra Kumar', marks: 85, class: '10th', address: 'Kadur, Banglore' },
    { name: 'Amit chaurasiya', marks: 90, class: '10th', address: 'Vaishali, Delhi' },
    { name: 'Anand sharma', marks: 78, class: '11th', address: 'Khalilabad, Uttar Pradesh' },
    { name: 'Dipak chauhan', marks: 92, class: '12th', address: 'UB Road, Mumbai' }
];

// Function to render student cards
function renderStudents(filteredStudents) {
    const studentContainer = document.getElementById('studentContainer');
    studentContainer.innerHTML = ''; // Clear previous content

    // Use map to create student card HTML elements
    filteredStudents.map(student => {
        const card = document.createElement('div');
        card.className = 'student-card';

        card.innerHTML = `
            <h3>${student.name}</h3>
            <p><strong>Marks:</strong> ${student.marks}</p>
            <p><strong>Class:</strong> ${student.class}</p>
            <p><strong>Address:</strong> ${student.address}</p>
        `;
        studentContainer.appendChild(card);
    });
}

// Initial rendering of all students
renderStudents(students);

// Search functionality
document.getElementById('searchInput').addEventListener('input', function(e) {
    const searchText = e.target.value.toLowerCase();

    // Filter students based on the search text
    const filteredStudents = students.filter(student => {
        return student.name.toLowerCase().includes(searchText);
    });

    // Re-render the student cards with filtered results
    renderStudents(filteredStudents);
});
