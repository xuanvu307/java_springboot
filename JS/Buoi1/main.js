//Bài 1
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

// Bài 2
function chuoiDaoNguoc(string) {
    let result = "";
    for (let i = string.length-1; i >= 0; i--) {
        result += string.charAt(i);
    }
    return result;
}

console.log(chuoiDaoNguoc("hello"));

// Bài 3
function switchCase(string) {
    switch (string) {
        case "VN": {
            console.log("Xin Chào");
            break;
        }
        case "EN": {
            console.log("Hello");
            break;
        }
        case "JP": {
            console.log("\"Konnichiwa\" - こんにちは");
            break;
        }
        case "CN": {
            console.log("你好 / Nǐ hǎo /");
            break;
        }
        case "KR": {
            console.log("안녕하세요? /an-nyeong-ha-se-yo/");
            break;
        }
        case "GR": {
            console.log("Hallo");
            break;
        }
        case "RS": {
            console.log("Д––––– д–––! Добрый день!");
            break;
        }
        default:{
            console.log("No translate");
        }
    }
}

switchCase("RS");


//Bài 4

function subString(string) {
    if (string.length < 11) {
        return string;
    } else {
        return string.substring(0,10)+ "...";
    }
}

console.log(subString("xinchaocacbandenvoiTechmaster"));
