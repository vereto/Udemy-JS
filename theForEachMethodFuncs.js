// const numbers = [1,2,3,4,5,6,7,8,9,10,12,14,16,18,20];


// numbers.forEach(function(el){
//     if (el % 2 == 0) {
//         console.log(el);
//     }     
// })
const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 90
    },
    {
        title: 'Parasite',
        score: 88
    },
    {
        title: 'Alien',
        score: 78
    }
]
movies.forEach(function (movie) {
    console.log(`${movie.title}: score ${movie.score}/100`);
})
