const button = document.querySelector('button');
const h1 = document.querySelector('h1');
const body = document.querySelector('body')



const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}
const randColGen = () => {
    const newColor = randomColor();
    body.style.backgroundColor = newColor;
    h1.innerText = newColor;
}

button.addEventListener('click', randColGen);