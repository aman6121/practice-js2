/**
 * Call your enrollStudent function with the following values:
 * firstName: Mark
 * lastName: Smith
 * age: 24
 * currentMark: 85
 */

let students = [
    {
        firstName: 'Mark',
        lastName: 'Smith',
        age: 24,
        currentMark: 85
    },
];

const enrollStudent = (firstName, lastName, age, currentMark) => {
    let newStudent = { firstName: firstName, lastName: lastName, age: age, currentMark: currentMark };
    students.push(newStudent);
    console.log(students);
};


/**
 * Call your enrollStudent function with the following values:
 * firstName: Dane
 * lastName: Joe
 * age: 21
 * currentMark: 90
 */

enrollStudent('Dane', 'Joe', 21, 90);



/**
 * Call your enrollStudent function with the following values:
 * firstName: Steven
 * lastName: McKnight
 * age: 23
 * currentMark: 54
 */

enrollStudent('steven','mcknight', 23, 54);



// Output to console the total number of enrolled students by calling the appropriate function

function totalenrolledStudents (value) {
    return value;  
    }  

    totalenrolledStudents (3);

// Output to console the class average by calling the appropriate function


function average (numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return (sum / numbers.length) || 0; 
  }
  
  average([85,90,54]);  


// Output to console if Mark's current Mark is above class average 

// access Mark
var studentOne = students['firstName'];  

var studentAboveClassAverage = function(currentMark, classAverage) {
 
    if(currentMark >= classAverage && currentMark > 0)
     {
    console.log('Mark\'s average is above class average');
    }
     else {  (currentMark <= classAverage) 
    console.log('Mark\'s average is below class average');
     }
};
   studentAboveClassAverage( 85 , 76);    




// Hint: you will need to get the complete class list first, find Mark, and then call the appropriate function

console.log()

 

