import React from "react";
import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Filters from "./components/Filters";
import MyCalendarConst from "./components/MyCalendarConst";
import PersonFilters from "./components/PersonFilters";



const App = () => { 
 
    return (
      <div className="App">
        
        <Filters />
        <PersonFilters />
        <MyCalendarConst />
         
      </div>
    );
}

export default App;

