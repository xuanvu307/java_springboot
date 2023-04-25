// luư dữ liệ vào store
export const setData = (key, value) =>{
    localStorage.setItem(key, JSON.stringify(value));
}


// lấy dữ liệu ra
export const getData = (key) => {
    const localStorageValue =  localStorage.getItem(key);

    if(localStorageValue){
        return JSON.parse(localStorageValue);
    }

    return null;
}