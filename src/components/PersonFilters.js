import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePersonFilter } from './redux/PersonFilterSlice';


const PersonFilters = () => {

    const personFilter = useSelector((state) => (state.personFilter.person));
    const dispatch = useDispatch();

    const handleChangePersonFilter = (personName) => {
        dispatch(changePersonFilter({person: personName}))
    }
    

    return(
        <div style ={{backgroundColor : "grey", margin: "10px"}}>
            <h2> Человек: {personFilter} </h2>
            {/*<h3> {`Local Count: ${localCount}`} </h3>*/}
            <div style ={{display: "flex", justifyContent: "center"}}>
                <button onClick={() => {handleChangePersonFilter("Бэлиг")}}> Бэлиг </button>
                <button onClick={() => {handleChangePersonFilter("Влад")}}> Влад </button>
                <button onClick={() => {handleChangePersonFilter("Данил")}}> Данил </button>
                <button onClick={() => {handleChangePersonFilter("Лиза")}}> Лиза </button>
                <button onClick={() => {handleChangePersonFilter("Леха")}}> Леха </button>
                <button onClick={() => {handleChangePersonFilter("")}}> Любой </button>
            </div>
        </div>
    );
}


export default PersonFilters;