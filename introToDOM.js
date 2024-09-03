// const links = document.querySelectorAll('p a');
// for (const link of links) {
//     console.log(link.href);
// }
const allLinks = document.querySelectorAll('a');

// for (const link of allLinks) {
 
//     link.innerText = 'I AM A LINK!!!!'
// }
//document.querySelector('h1').innerText = '<i>askdjas</i>'
for (const link of allLinks) {
    link.style.color = 'rgb(0,199,134)'
    link.style.textDecorationColor = 'magenta'
}
//using getAttribute -> setAttribute it can change classes for instance
//easier way is to call up classList and then set a new class,remove,toggle the options and etc

const firstImage = document.querySelector('.square');

console.log(firstImage.children)

//firstImage.nextSibling and previousSibling - returns text,which is an empty character 
//firstImage.nextElementSibling - will gives us the next image

const newElement = document.createElement('img');
newElement.src = 'https://imgs.search.brave.com/ZsnRksnk1Ji-1ymnbJZyxrHVjY2iclMZQPCx_GTH9E8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2YzLzhi/L2NmL2YzOGJjZmM0/MmViMTg0ZjYzMGE0/NGY3NWJjOWRjN2Uy/LmpwZw'
document.body.appendChild(newElement)
newElement.classList.add('square');

// const newH3 = document.createElement('h3')
// newH3.innerText = 'I am New!';
// document.body.appendChild(newH3);

const p = document.querySelector('p');
p.append('I am new text and come from the outside YHAAAA')

const newB = document.createElement('b')
newB.append('Hi!')
p.prepend(newB)

const h2 = document.createElement('h2');
h2.append('Are adorable chickens');

const h1 = document.querySelector('h1');
h1.insertAdjacentElement('afterend', h2)

const h3 = document.createElement('h3');
h3.innerText = 'I am h3';
h1.after(h3)

const firstLi = document.querySelector('li');
const ul = firstLi.parentElement;
ul.removeChild(firstLi)

const b = document.querySelector('b');
b.parentElement.removeChild(b)

const img = document.querySelector('img');
img.remove()