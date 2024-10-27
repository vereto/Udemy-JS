// function callTwice(func) {
//     func(44);
//     func(55);
// }
// function anotherFunc(num) {
//     console.log('Another Function: ', num);
// }
// function anotherFunction2(msg) {
//     console.log('Another Function 2: ', msg);
// }

// function callTenTimes(f,num) {
//     for(let i = 0; i< num; i++){
//         f()
//     }
//     console.log('end function');
// }
// function rollDie() {
//     const roll = Math.floor(Math.random() * 20) + 1;
//     console.log(roll);
// }
// callTenTimes(rollDie, 3)
// callTenTimes(rollDie, 5)
// callTwice(anotherFunc)
// callTwice(anotherFunction2)

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.7) {
        return function () {
            console.log('I am a good function!');
            console.log('You win!');
        }
    }else{
        return function () {
            alert('YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS!')
            alert('STOP TRYING TO CLOSE THIS WINDOW!')
            alert('STOP!')
            alert('WHY ARE YOU DOING THIS TO YOURSELF!')
            alert('STOP! NO POINT IN THAT')
            alert('THIS IS USELESS!')
            alert('OK THEN! CLOSE THIS WINDOW!')
        }
    }
}
//factory function
 function makeBetweenFunc(min,max){

    return function(num){
        return num >= min && num <= max
    }
} 
// makeBetweenFunc(5,10) => 

// function isBetween(num) {
//     return num>=50 && num <= 100
// }
// function isBetween(num) {
//     return num>=50 && num <= 100
// }
