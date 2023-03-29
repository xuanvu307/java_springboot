// reducer là pure function(cùng 1 tham số đầu vào => cho ra cùng 1 kết quả)
// không có side effect

// ví dụ const sum = (a,b) => a+b;

const initiaState = 0;

const counterReducer = (state = initiaState, action) =>{
    switch(action.type){
        case "counter/increment" : {
            return state + 1;
        } 
        case "counter/decrement" :{
            return state - 1;
        } 
        default : {
            return state;
        }
    }
}

export default counterReducer