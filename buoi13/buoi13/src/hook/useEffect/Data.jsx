import React, { useEffect, useState } from 'react'

function Data() {
    const [datas, setData] = useState([]);
    const [type, setType] = useState("posts");
    useEffect(() =>{
        const fetchData = async () =>{
            const data = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
            const dataJson = await data.json();
            setData(dataJson);
        }
        fetchData();
    },[type]);

  return (
    <>
        <h2>useEffect</h2>
        <h4>{type}</h4>
        {["posts", "photos", "albums"].map((element) => (
            <button onClick={() => setType(element)} 
                style ={type === element ? {color : "white", backgroundColor : "red"} : {}}>{element}
            </button>
        ))}

        {/* <button onClick={() => setType("posts")} style ={type === "posts" ? {color : "white", backgroundColor : "red"} : {}}>posts</button>
        <button onClick={() => setType("photos")} style ={type === "photos" ? {color : "white", backgroundColor : "red"} : {}}>photos</button>
        <button onClick={() => setType("albums")} style ={type === "albums" ? {color : "white", backgroundColor : "red"} : {}}>albums</button>
        <ul>
            {datas.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))}
        </ul> */}
    </>
  )
}

export default Data