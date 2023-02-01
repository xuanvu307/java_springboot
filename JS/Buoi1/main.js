// sử dụng đệ quy
function giaiThua(number){
    if (number == 1) {
        return 1;
    }
    return number*giaiThua(number-1);
}

// khử đệ quy

function giaiThua2(number) {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }

    return result;
}

console.log(giaiThua(5));

console.log(giaiThua2(5));


