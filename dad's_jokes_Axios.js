// const fetchBitcoinPrice = async () => {
//   try {
//     const res = await axios.get("http://api.cryptonator.com");
//     console.log(res.data.ticker.price);
//   } catch (e) {
//     console.log("ERROR!", e);
//   }
// };
const jokes = document.querySelector('#jokes')
const button = document.querySelector('#button')

const addNewJoke = async() =>{
    
const jokeText = await getDadJoke();
const newLI = document.createElement('LI');
newLI.append(jokeText)
jokes.append(newLI)
}

const getDadJoke = async () => {
    try {
        const config =  {headers: { Accept:'application/json'}}
        const res = await axios.get('https://icanhazdadjoke.com/',config);
        return res.data.joke;
    } catch (error) {
        return 'NO JOKES HERE'
    }
   
}
button.addEventListener('click', addNewJoke)
