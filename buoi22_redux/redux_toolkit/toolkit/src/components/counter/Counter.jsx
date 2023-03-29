import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../../app/slices/counterSlice";

function Counter() {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();
    const handleDecrement = () => {
        dispatch(decrement());
    }
    const handleIncrement = () => {
        dispatch(increment());
    }
    return (
        <div>
            <h1>Counter : {counter}</h1>
            <button onClick={handleDecrement}>Giảm</button>
            <button onClick={handleIncrement}>Tăng</button>
        </div>
    )
}

export default Counter