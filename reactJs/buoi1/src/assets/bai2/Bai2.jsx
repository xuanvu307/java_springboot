import React from 'react'
import { useState } from 'react'

function Bai2() {
    const colors = [
        '#3498db',
        '#9b59b6',
        '#e74c3c',
        '#2c3e50',
        '#d35400',
    ]
    const [currColors , setCurrColor] = useState([...colors])

    const moreBox = () =>{
        setCurrColor([...currColors, ...colors])
    }
    
    function clickBox(index){
        const newColors = [...currColors]
        console.log(newColors)
        console.log(index)
        newColors.splice(index, 1);
        setCurrColor(newColors)
    }


  return (
    <>
        <h1> JS DOM</h1>
        <button id="btn" onClick={moreBox}>More boxes</button>
        <h4 id="score"> Total box:<span className ="points">{currColors.length}</span></h4>
            {currColors.map((e, i) =>(
                <div className='box' style = {{backgroundColor : e}} onClick={() => clickBox(i)}></div>
            ))}
    </>
  )
}

export default Bai2