let arr = [1, 2, 3, 4, 51, 6, 7, 8, 9];


function maxArr(arr) {
    let max = arr[0];
    for (let i = 1; i< arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }

    return max;
}

function minArr(arr) {
    let min = arr[0];
    for (let i = 1; i< arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }

    return min;
}
console.log(maxArr(arr));
console.log(minArr(arr));

function bai3(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i]%2;
    }
    return arr;
}

console.log(bai3(arr));

function bai4(a) {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array[i] = a;
    }
    return array.toString().replaceAll(',','');
}

console.log(bai4('a'));

function bai5(a) {
    let array = [];
    for (let i = 0; i < 10; i++) {
        array[i] = a;
    }
    return array.toString().replaceAll(',','-');
}

console.log(bai5('a'));

let arr1 = [1, 2, 3, 4, 51, 6, 7, 8, 9];
function checkExist(arr, taget) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == taget) {
            return true;
        }
    }
    return false;
}

console.log(checkExist(arr1, 1));

function checkThanElement(arr, number) {
    let array = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > number){
            array.push(arr[i]);
        }
    }
    return array;
}

console.log(checkThanElement(arr1, 5));


function randomHexCode(arr) {
    let color = [];
    color[0] =  "#";
    for (let i = 1; i < 7; i++) {
        color[i] = arr[Math.floor(Math.random()*16)];
    }
    return color.toString().replaceAll(',','');
}

let arrColorHex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];

console.log(randomHexCode(arrColorHex));

function randomRGB() {
    let rgb = [];
    rgb[0]= Math.floor(Math.random()*256);
    rgb[1]= Math.floor(Math.random()*256);
    rgb[2]= Math.floor(Math.random()*256);

    return "rgb("+ rgb +")";
}

console.log(randomRGB());

console.log(Math.floor(Math.random()*3));

console.log(Math.max(...arr1));
console.log(Math.min(...arr1));

// Khởi tạo object có dữ liệu (nên sử dụng)
let user = {
    name: "Nguyễn Văn A",
    age: 23,
    email: "abc@gmail.com"
}

console.log(user.name);
delete user.email;
user.address = "HN";
console.log(user);

// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]


//1
let {name, price, brand, count} = products;

console.log(products);

//2 
//3
function findApple(product){
    return product.filter((p) => p.brand == "Apple");
}
console.log(findApple(products));
//4
function findProducts(product){
    return product.filter((p) => p.price >= 20000000);
}

console.log(findProducts(products));
//5
function findProForName(products){
    return products.filter((p) => p.name.toLowerCase().includes("pro"))
}
console.log(findProForName(products));
//6

//7
function finSamSung(product){
    delete product.filter((p)=> p.name == "Samsung");
}
console.log(products);
//8
//9
//10