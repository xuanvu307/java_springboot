const btn = document.getElementById("btn");
const image = document.getElementById("image");

// Lắng nghe sự kiện khi bấm vào nút "random"
btn.addEventListener("click", function () {
    getRandomImage()
})

// Gọi API để lấy dữ liệu và hiển thị
async function getRandomImage() {
    try {
        // Gọi API lấy ảnh random của dog
        let res = await axios.get("https://dog.ceo/api/breeds/image/random")

        // Gán URL cho thẻ image
        image.src = res.data.message
    } catch (error) {
        console.log(error);
    }
}

// btn.addEventListener("click", ()=>{
//     fetch("https://dog.ceo/api/breeds/image/random")
//         .then(res =>{
//             return res.json();
//         })
//         .then(data =>{
//             image.src = data.message;
//         })
//         .catch(err =>{
//             console.log(err)
//         })
// })

// btn.addEventListener("click",async ()=>{
//     try {
//         let res = await fetch("https://dog.ceo/api/breeds/image/random");
//         let data = await res.json();
//         image.src = data.message;
//     } catch (error) {
//         console.log(error)
//     }
// })