import React from "react";
import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import BasicCalendar from "./components/BasicCalendar";
import ReduxToolkitApp from "./components/ReduxToolkitApp";
import { useDispatch, useSelector } from 'react-redux';
import Filters from "./components/Filters";
import BasicCalendarConst from "./components/BasicCalenderConst";
import MyCalendar from "./components/MyCalendar";
import MyCalendarConst from "./components/MyCalendarConst";


const App = () => { 
  const roomFilter = useSelector((state) => (state.roomFilter.room));

    return (
      <div className="App">
        <Filters />
        {/*<ReduxToolkitApp />*/}
        
        {/*<BasicCalendar roomFilter={roomFilter} />  */}
        {/*<BasicCalendarConst />*/}
        {/*<MyCalendar />*/} 
        <MyCalendarConst />
         
      </div>
    );
}

export default App;

