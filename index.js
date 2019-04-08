//Example 1
//ternary operator
let age = 18; 
const canhaveKTP = age >= 21? 'You may register.' : 'You may not register';
console.log(canhaveKTP)


//Example 2 
//Javascript operand
// let grade = 89; 
let grade = 30; 
if  (grade >= 90) {
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
// switch case
let job = 'student'

switch (job) {
    case 'dokter':
        console.log('ngobatin'); 
        break
    case 'student':
        console.log('koding');
        break 
    case 'sailor':
        console.log('mancing'); 
        break
}

