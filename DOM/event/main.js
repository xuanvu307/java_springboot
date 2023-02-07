const sayHello = () =>{
    alert("hello")
}

const btn2 = document.getElementById("btn-2")
const btn3 = document.getElementById("btn-3")
// btn2.onclick = () =>{

//     alert("hello 2")
// }
const sayhello2 = () =>{
    alert("say hello")
}
btn2.onclick = sayhello2;

btn3.addEventListener("click", ()=> {
    alert("hello 3")
})

document.addEventListener('click', function() {
    console.log('click');
   })
   
   document.addEventListener('mousedown', function() {
    console.log('mousedown');
   })
   
   document.addEventListener('mousemove', function() {
    console.log('mousemove');
   })
   
   document.addEventListener('mouseup', function() {
    console.log('mouseup');
   })

   document.addEventListener('click', function(event) {
    console.log(event);
   })