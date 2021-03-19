import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { useDispatch, useSelector } from 'react-redux';
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const BasicCalendarConst = () => {
    const roomFilter = useSelector((state) => (state.roomFilter.room));
  const state = {
    events: [
      {
        start: moment().toDate(),
        end: moment()
          .add(1, "days")
          .toDate(),
        title: "Комната 1",
        room: 1
      },
      {
        start: new Date(2021, 2, 22),
        end: new Date(2021, 2, 23),
        title: "Комната 2",
        room: 2
      },
      {
        start: new Date(2021, 2, 25),
        end: new Date(2021, 2, 26),
        title: "Комната 3",
        room: 3
      }
    ]
  };

    
    return (
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          resizable
          events={roomFilter == 0? state.events : state.events.filter(event => event.room === roomFilter)}
          style={{ height: "100vh" }}
        />
    );
}

export default BasicCalendarConst;

/*events={this.roomFilter == 0? this.state.events : this.state.events.filter(event => event.room === this.roomFilter)}*/