const colors = ['red','orange','yellow','green','blue','indigo','violet'];
      
const h1 = document.querySelectorAll("span");
for (let letter = 0; letter < h1.length; letter++) {
    h1[letter].style.color = colors[letter]
}