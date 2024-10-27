const students = [
    { 
     "name": "John Doe", 
     "age": 20, 
     "address": { 
       "pincode": "100001",
       "city": "New York",
       "country": "USA" 
      } 
    },

    { 
     "name": "Alice Smith",
     "age": 22,
     "address": { 
        "pincode": "200002",
        "city": "Los Angeles",
        "country": "USA" 
      } 
    },

    { 
     "name": "Rahul Mehta",
     "age": 21, 
     "address": {
        "pincode": "110011", 
        "city": "Delhi",
        "country": "India"
        }       
    },

    { 
     "name": "Maria Garcia", 
     "age": 23,
     "address": { 
        "pincode": "28013",
        "city": "Madrid",
        "country": "Spain" 
        } 
    },

    { 
     "name": "Sophia Brown",
     "age": 19,
     "address": {
        "pincode": "SW1A 1AA", 
        "city": "London",
        "country": "UK"
        } 
    },

    { 
     "name": "Liam Nguyen",
     "age": 20,
     "address": {
        "pincode": "75001",
        "city": "Paris", 
        "country": "France"
        } 
    },

    { 
     "name": "Emma Johnson", 
     "age": 21,
     "address": { 
        "pincode": "90001",
        "city": "Chicago", 
        "country": "USA" 
        }
    },

    { 
     "name": "David Chen",
     "age": 22,
     "address": {
        "pincode": "200080", 
        "city": "Shanghai",
        "country": "China"
        } 
    },

    { 
     "name": "Nina Patel",
     "age": 24, 
     "address": { 
        "pincode": "400001",
        "city": "Mumbai",
        "country": "India" 
        } 
    },
    
    { 
     "name": "Carlos Sanchez",
     "age": 23,
     "address": { 
        "pincode": "01000",
        "city": "Mexico City",
        "country": "Mexico" 
        } 
    },
];
// Accessing Data //

//  Write a function that takes in the JSON data and prints out all the students' names.

function StudentNames(students) {
    students.forEach(student => {
        console.log(student.name);
    });
}
StudentNames(students);

// - Create a function that lists all students who are from the USA.

function StudentsFromUSA(students) {
    const usaStudents = students.filter(student => student.address.country === "USA");
    usaStudents.forEach(student => {
        console.log(student.name);
    });
}
StudentsFromUSA(students);

// - Write a function to find the city of a student based on their name. If the student is not found, return "Student not found".

function findCityByStudentName(students, studentName) {
    const student = students.find(s => s.name === studentName);
    return student ? student.address.city : "Student not found";
}
console.log(findCityByStudentName(students, "Alice Smith")); 
console.log(findCityByStudentName(students, "John Doe")); 
console.log(findCityByStudentName(students, "Unknown Student")); 

// Filtering and Mapping //

//  Write a function that returns an array of all students who are above 21 years old.

function StudentNamesAbove21(students) {
    return students
        .filter(student => student.age > 21)
        .map(student => student.name);
}
console.log(StudentNamesAbove21(students));

// - Create a function that returns an array of names of students from a given country, like "India" or "Japan".

function StudentNamesByCountry(students, country) {
    return students
        .filter(student => student.address.country === country)
        .map(student => student.name);
}

const indianStudents = StudentNamesByCountry(students, "India");
console.log(indianStudents);
 
const japanStudents = StudentNamesByCountry(students, "Japan");
console.log(japanStudents); 

// - Write a function that returns an array of objects with only name and age properties for each student.

function NamesAndAges(students) {
    return students .map(student => ({
        name: student.name, age: student.age
    })); 
}
const namesAndAges = NamesAndAges(students);
console.log(namesAndAges);