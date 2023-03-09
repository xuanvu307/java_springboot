import React, { useState } from 'react'
import { render } from 'react-dom';

const orders = [10,20,30];

function Content() {
    // Xu ly phuc tap can nhieu time thuc hien
    const [count, setCount] = useState(() => {
        const total = orders.reduce((a,b) => a+b, 0);
        console.log(total)
        return total
    });
    
    //user
    const [user, setUser] = useState({
        id: 1,
        name: "nguyen van a",
        email: "a@gmail.com"
    });

    //product
    const [products, setProducts] = useState([
        {id: 1, name : "pr 1", price: 10000},
        {id: 2, name : "pr 2", price: 20000},
        {id: 3, name : "pr 3", price: 30000}
    ]);

    //random name
    const randomName = () =>{
        const rdName = `New name ${Math.floor(Math.random() *1000)}`;
        setUser({...user, name: rdName})
    }

    //random price
    const randomPrice = () => {
        const productId = 1;
        const rdPrice = `${Math.floor(Math.random() *100000)}`;

        const newProducts = products.map(p =>{
            if(p.id === productId){
                return {...p, price : rdPrice}
            }
            return p
        })

        setProducts(newProducts);
    }

    //delete
    const deleteProduct = (id) =>{
        const newProducts = products.filter(p => p.id !== id);
        setProducts(newProducts);
    }

    const addCount = () =>{
        setCount((count) => count+1);
        setCount((count) => count+1);
        setCount((count) => count+1);
    }
  return (
    <>
        {console.log("render")}
        <h2>Counter : {count}</h2>
        <button onClick={addCount}>Add</button>
        <br />
        <h2>User</h2>
        <p>
            {user.id} - {user.name} - {user.email}
        </p>
        <button onClick={randomName}>Random name</button>
        <h2>Product</h2>
        <ul>
            {products.map(p => (
                <li key={p.id}>
                    {p.id} - {p.name} - {p.price}
                    <button onClick={() => deleteProduct(p.id)}>Xoa</button>
                </li>
            ))}
        </ul>
        <button onClick={randomPrice}>Random price</button>
    </>
  )
}

export default Content