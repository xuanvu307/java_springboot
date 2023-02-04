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
        count: 11,
    },
    {
        name: "OPPO Find X1 Pro",
        price: 2000000,
        brand: "OPPO",
        count: 1,
    },
    {
        name: "OPPO Find X2 Pro",
        price: 18500000,
        brand: "OPPO",
        count: 6,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 16500000,
        brand: "OPPO",
        count: 9,
    },
    {
        name: "OPPO Find X4 Pro",
        price: 22500000,
        brand: "OPPO",
        count: 3,
    },
    {
        name: "OPPO Find X5 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 4,
    },
]


//4 
function filterProduct(product){
    return product.filter((p) => p.price >= 20000000);
}

console.log(filterProduct(products));


//5 
function findProForName(products){
    return products.filter((p) => p.name.toLowerCase().includes("pro"))
}

console.log(findProForName(products)); 


// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product

function addProduct(products, name, price, brand, count) {
    products.push({
        name: name,
        price: price,
        brand: brand,
        count: count,
    })
}
addProduct(products,"SamSung abc", 12345678, "Samsung", 4)
console.log(products);

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng

function findSamSung(product){
    return product.findIndex((p)=> p.brand == "Samsung");
}

function deleteAllProductBySamsung(products) {
    while (products.some((p)=> p.brand == "Samsung")) {
        products.splice(findSamSung(products),1);
    }
}

deleteAllProductBySamsung(products);
console.log(products);

// 8. Sắp xếp giỏ hàng theo price tăng dần
function sortByPrice(products) {
    return products.sort((a,b) => a.price - b .price);
}

console.log(sortByPrice(products));

// 9. Sắp xếp giỏ hàng theo count giảm dần
function sortByCountReverse(products){
    return products.sort((a,b) => b.count - a.count);
}

console.log(sortByCountReverse(products));

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
function randomTwoProduct(products) {
    let len = products.length;
    let result = [];
    let index0 = 0;
    let index1 = 0;
    while (index0 == index1){
        index0 = Math.floor(Math.random() * len);
        index1 = Math.floor(Math.random() * len);
    }
    result[0] = products[index0];
    result[1] = products[index1];
    return result;
}

console.log(randomTwoProduct(products));