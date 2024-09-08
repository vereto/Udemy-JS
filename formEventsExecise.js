const form = document.querySelector('form');
const products = document.querySelector('#list');
form.addEventListener('submit', function (e){
    e.preventDefault();
    
    const inputValue = form.elements.product;
    const quantityValue = form.elements.qty;

    const liContainer = document.createElement('li');
    liContainer.append(`${quantityValue.value} ${inputValue.value}`)
   
    products.append(liContainer);
    inputValue.value = ''
    quantityValue.value = ''
})