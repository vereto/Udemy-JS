// const password = prompt("please enter a new password");

// if(password.length >= 8){
//     console.log('password is long enough');
// }else{
//     console.log('password is too short');
// }

// function checkNum(num) {

// if(num <= 100) {
//     if(num >= 50) {
//         console.log("HEY!");
//     }
// } else {
//     if (num < 103) {
//         if(num % 2 === 0){
//             console.log("YOU GOT ME!");
//         }
//     }
// }
// }
// checkNum(101)

const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter']; //DO NOT TOUCH THIS LINE!

planets.shift();
planets.push('Saturn');
planets.unshift('Mercury')
console.log(planets);