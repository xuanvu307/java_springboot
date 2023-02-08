let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
];

let currColors = [...colors];


const boxesEl = document.querySelector(".boxes");
const pointsEl = document.querySelector(".points");
const btn =  document.getElementById("btn");

const renderBox = arr => {
    boxesEl.innerHTML = " ";
    let html = "";
    arr.forEach((color, index) => {
       html += `<div class = "box" style = "background-color : ${color}" onclick = "removeBox(${index})"></div>` 
    });

    boxesEl.innerHTML = html;
    pointsEl.innerHTML = arr.length;
}

btn.addEventListener("click", ()=>{
    currColors = [...currColors, ...colors];
    renderBox(currColors);
})

const removeBox = index =>{
    currColors.splice(index,1);
    renderBox(currColors);
}

renderBox(currColors);