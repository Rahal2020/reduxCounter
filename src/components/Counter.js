import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, reset} from '../Redux/Actions/CounterAction'

export const Counter = () => {
    const count = useSelector((state) => state.counter);
        const dispatch = useDispatch()
    return (
         
        <div className="counter">
            <h1>COUNTER</h1>
            <button className="decrement-btn" onClick={()=> dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button className="increment-btn" onClick={()=> dispatch(increment())}>+</button>
            <br/>
            <button className="Reset-btn" onClick={()=> dispatch(reset())}>Reset</button>
        </div>
    )
}
