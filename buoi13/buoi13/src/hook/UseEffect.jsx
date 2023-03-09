import React from 'react'

//useEffect(cb, [dp])

//th1 : useEffect(cb)
// -  chay sau moi lan render
//th2 : useEffect(cb, [])
// chi chay lan dau tien render
//th3 : useEffect(cb, [dps])
//duoc chay lai neu co su thay doi ve gia tri cua dp

// chung: đều chạy sau lần render đầu tiên(render xong chạy)


function UseEffect() {
    const [count, setCount] = useState(0)
    //th1 : useEffect(cb)
    // UseEffect(() => {
    //     console.log("TH1")
    // })
     //th2 : useEffect(cb, [])
    //  UseEffect(() => {
    //     console.log("TH2")
    // })
  return (
    <div>
        {console.log("render")}
        <h2>Counter : {count}</h2>
        <button onClick={addCount}>Add</button>
    </div>
  )
}

export default useEffect
