// const texts = ['rofl', 'lol', 'omg', 'ttyl'];
// const caps = texts.map(function (t) {
//     //return
//     console.log(t.toUpperCase());
// })

// const numbers = [1,2,3,4,5,6,7,8,9,10,12,14,16,18,20];

// numbers.map(function (num) {
//     console.log( num * 2);
// })

const movies = [
    {
        title: 'Amadeus',
        score: 142
    },
    {
        title: 'Stand By Me',
        score: 190
    },
    {
        title: 'Parasite',
        score: 120
    },
    {
        title: 'Alien',
        score: 130
    }
]
// const movieTitle = movies.map(function (m) {
// return m.title.toUpperCase();  
// })
 //summing an array
    // const arr = [12,5,16,5,9,76,44,21,23,65]
    // // arr.reduce((acc,currentValue)=>{
    // //     return acc + currentValue
    // // });
    // const total = arr.reduce((totalSum,num) => totalSum + num);

    const highestScore = movies.reduce((highest, current)=> {
        if(current.score > highest.score){
            return current;
        }
        return highest;
    })

// const fullNames = [
//     {first: 'Albus', last: 'Dumbledore'}, 
//     {first: 'Harry', last: 'Potter'}, 
//     {first: 'Hermione', last: 'Granger'}, 
//     {first: 'Ron', last: 'Weasley'}, 
//     {first: 'Rubeus', last: 'Hagrid'}, 
//     {first: 'Minerva', last: 'McGonagall'}, 
//     {first: 'Severus', last: 'Snape'}];
   
//     const firstNames = fullNames.map(function(theFirst){
//         console.log(theFirst.first)
//     })

//     const square = (x) =>{
//         return x * x;
//     }
//     const squareNum = x =>{//no parens around param
//         return x * x;
//     }
//     const rollDie = () => {
//         return Math.floor(Math.random() * 6) + 1
//     }
//     const sum = (x,y) =>{
//         return x + y;
//     }
//     const greetName = string => //implicit return
//         (`Hey ${string}!`);
    
//     const greetings = string =>`Hey ${string}!` //one-liner implicit return


   