// Bài 1
const text = document.getElementById("text");
console.log(text)
text.style.color = "#777";
text.style.fontSize = "2rem";
const btn = ""

// Bài 2
const ul_li = document.querySelectorAll("li");

ul_li.forEach(element => {
    element.style.color = "blue";
});

// Bài 3

const addItem = document.createElement("li");
