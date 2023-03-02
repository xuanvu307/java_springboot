import React from 'react'
import { useState } from 'react';

function Bai1() {
    const [items, setItems] = useState(["Item1", "Item2", "Item3"]);
    const [show, setShow] = useState(true);
    const [message, setMessage] = useState("Hide")

    // them phan tu
    const add = () =>{
        const newItems = [...items]
        newItems.push("new item")
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
            {show && <ul>
                    {items.map((i)=>(
                        <li>{i}</li>
                    ))}
                </ul>
            }
            <button onClick={add}>Add</button>
            <button onClick={remove}>Remove</button>
        </>
    )
}

export default Bai1