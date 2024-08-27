const button = document.querySelector('button');
const h1 = document.querySelector('h1');
button.addEventListener('click', function () {
   const newColor = makeRandomColor()
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})


const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    
    if(r + g + b < 155){
h1.style.color = 'white';
}else 
h1.style.color = 'black';
    return `rgb(${r},${g}, ${b})`;
}

const buttons = document.querySelectorAll('button')

for (const button of buttons) {
    button.addEventListener('click',colorize)
}
const h1s = document.querySelectorAll('h1');
for (const h1 of h1s) {
    h1.addEventListener('click',colorize)
}

function colorize() {
    this.style.backgroundColor = makeRandomColor();
    this.style.color = makeRandomColor() 
}