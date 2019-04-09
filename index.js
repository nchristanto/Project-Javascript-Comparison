// Example 1
// Ternary operator
let age = 18; 
const canHaveNationalID = age >= 21 ? 'You may register.' : 'You are not able to register yet!';
console.log(canHaveNationalID)


// Example 2 
// Javascript operand
// let grade = 89; 
let grade = 30; 
if (grade >= 90) {
    console.log('Congratulations you got A!')
} else if (grade >= 80) {
    console.log('Well done, you score B!')
} else if (grade >=70) {
    console.log('You score C!')
} else if (grade >= 60) {
    console.log('D')
} else {
    console.log('F')
}

// Example 3
// Switch case
let job = 'student'

switch (job) {
    case 'doctor':
        console.log('Heal patient'); 
        break
    case 'student':
        console.log('Code');
        break 
    case 'sailor':
        console.log('Forever sail'); 
        break
}

