import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class BasicCalendar extends Component {
  state = {
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

  constructor({roomFilter}) {
      super();
      this.roomFilter = roomFilter;
  }

  moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
    const { events } = this.state

    let allDay = event.allDay

    if (!event.allDay && droppedOnAllDaySlot) {
      allDay = true
    } else if (event.allDay && !droppedOnAllDaySlot) {
      allDay = false
    }

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end, allDay }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }

  render() {

    /*const roomFilter = useSelector((state) => (state.roomFilter.room));*/

      console.log(moment().toDate());
      console.log(new Date(2021, 2, 26));
    
    return (
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          onEventDrop={this.moveEvent}
          resizable
          events={this.roomFilter == 0? this.state.events : this.state.events.filter(event => event.room === this.roomFilter)}
          style={{ height: "100vh" }}
        />
    );
  }
}

export default BasicCalendar;