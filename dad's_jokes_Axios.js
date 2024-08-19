const fetchBitcoinPrice = async () => {
  try {
    const res = await axios.get("http://api.cryptonator.com");
    console.log(res.data.ticker.price);
  } catch (e) {
    console.log("ERROR!", e);
  }
};

const jokes = document.querySelector('#jokes')
const getDadJoke = async () => {
    const config =  {headers: { Accept:'application/json'}}
    const res = await axios.get('https://icanhazdadjoke.com/',config);
    const newLI = document.createElement('LI');
    newLI.append(res.data.joke)
    jokes.append(newLI)
}
