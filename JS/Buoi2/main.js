let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 30000000, // Giá mỗi sản phẩm
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

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product
const newProduct = (name, price, brand, count) =>{
    return  {
        name: name,
        price:price,
        brand: brand,
        count: count
    }
}

const samsungS23 = newProduct("Samsung Galaxy S23", 23_000_000,"Samsung", 10);
products.push(samsungS23);
console.log(products);

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng

const deleteSamsung = (arr) =>{
    arr.forEach((element, index) => {
       if(element.brand == "Samsung"){
            arr.splice(index, 1);
       } 
    });
} 

deleteSamsung(products)
console.log(products)

// 8. Sắp xếp giỏ hàng theo price tăng dần
const sortByPrice = (list) => list.sort((a,b) => a.price - b.price) ;


// 9. Sắp xếp giỏ hàng theo count giảm dần
const sortReverseByCount = (list) => list.sort((a,b) => b.count - a.count)


// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng
const randomTwoProduct = (arr) =>{
    let index1 = Math.floor(Math.random() * arr.length);
    let index2 = Math.floor(Math.random() * arr.length);
    while(true){
        console.log(index1)
        console.log(index2)
        if(index1 == index2){
            index2 = Math.floor(Math.random() * arr.length);
        } else {
            return  [arr[index1], arr[index2]]
        }
    }
}

console.log(randomTwoProduct(products))