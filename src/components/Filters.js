import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeRoomFilter } from './redux/FilterSlice';


const Filters = () => {

    const roomFilter = useSelector((state) => (state.roomFilter.room));
    const dispatch = useDispatch();

    const handleChangeRoomFilter = (number) => {
        dispatch(changeRoomFilter({roomNumber: number}))
    }
    

    return(
        <div style ={{backgroundColor : "grey", margin: "10px"}}>
            <h2> Комната: {roomFilter} </h2>
            {/*<h3> {`Local Count: ${localCount}`} </h3>*/}
            <div style ={{display: "flex", justifyContent: "center"}}>
                <button onClick={() => {handleChangeRoomFilter(1)}}> Комната №1 </button>
                <button onClick={() => {handleChangeRoomFilter(2)}}> Комната №2 </button>
                <button onClick={() => {handleChangeRoomFilter(3)}}> Комната №3 </button>
                <button onClick={() => {handleChangeRoomFilter(0)}}> Любая </button>
            </div>
        </div>
    );
}


export default Filters;