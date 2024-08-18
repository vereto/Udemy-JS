for (let i = 0; i < 100; i++) {
    const button = document.createElement('button')
    button.innerText = ('Hey!');
    const div = document.getElementById('container');
    div.appendChild(button);
}