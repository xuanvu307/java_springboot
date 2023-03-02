const btn = document.getElementById('btn');
const image = document.getElementById('image');
const select = document.getElementById('breed-list');

async function getBreedList() {
    let res = await axios.get("https://dog.ceo/api/breeds/list/all")
    console.log(res.data.message);
    renderBreed(Object.keys(res.data.message));
}


function renderBreed(breeds) {
    for (let i = 0; i < breeds.length; i++) {
        let optine = document.createElement("option");
        optine.value = breeds[i];
        optine.innerText = breeds[i];
        select.insertAdjacentElement("afterbegin", optine);
    }
}

getBreedList()


btn.addEventListener("click", async () => {
    try {
        let keySelect = select.value;
        console.log(keySelect)
        let link = await axios.get(`https://dog.ceo/api/breed/${keySelect}/images/random`);
        image.src = link.data.message
    } catch (error) {
        console.log(error);
    }
})