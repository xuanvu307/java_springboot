import React from 'react'
import { useState } from 'react';

function Bai1() {
    const [items, setItems] = useState(["Item1", "Item2", "Item3"]);
    const [show, setShow] = useState(true);
    const [message, setMessage] = useState("Hide")
    const [name, setName] = useState("")

    // them phan tu
    const add = () =>{
        const newItems = [...items]
        if (name.trim() == ""){
            alert("ô input trống")
        }
        newItems.push(name)
        setItems(newItems);
    }
    // xoa phan tu
    const remove = () => {
        const newItems = [...items]
        newItems.splice(newItems.length-1, 1)
        setItems(newItems);
    }

    //toggle
    const toggle = () =>{
        setShow(!show);
        show ? setMessage("Show") : setMessage("Hide")
    }
    return (
        <>
            <button onClick={toggle}>{message}</button>
            <br />
            {show && <ul>
                    {items.map((i)=>(
                        <li>{i}</li>
                    ))}
                </ul>
            }
            <input type="text" placeholder='Nhập nội dung muốn thêm' value={name} onChange = {e => setName(e.target.value)}/>
            <button onClick={add}>Add</button>
            <button onClick={remove}>Remove</button>
        </>
    )
}

export default Bai1