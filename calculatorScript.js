const getvalues = document.querySelector('.buttons').addEventListener('click', function(e){
const value = e.target.innerText;
// const btn1 =document.querySelector('#one').value;

const sreenHtml = `<p>${value}</p>`;
// console.log(sreenHtml);

const display = document.querySelector('.display p').innerText = `${value}`;

console.log(display);
});
