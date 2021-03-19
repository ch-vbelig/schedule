import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, test } from './redux/CounterSlice';


const ReduxToolkitApp = () => {

    const count = useSelector((state) => (state.counter.count));
    const dispatch = useDispatch();

    const handleTest = () => {
        dispatch(test({testValue: 33}))
    }

    const handleIncrement = () => {
        dispatch(increment());
    }

    const handleDecrement = () => {
        dispatch(decrement());
    }


    return(
        <div style ={{backgroundColor : "grey", margin: "10px"}}>
            <h2> {count} </h2>
            {/*<h3> {`Local Count: ${localCount}`} </h3>*/}
            <div style ={{display: "flex", justifyContent: "center"}}>
                <button onClick={handleIncrement}> Increment </button>
                <button onClick={handleDecrement}> Decrement </button>
                <button onClick={handleTest}> Test </button>
            </div>
        </div>
    );
}


export default ReduxToolkitApp;