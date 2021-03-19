import React, {useState} from 'react'
import { Calendar, Views, momentLocalizer} from 'react-big-calendar'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import { useDispatch, useSelector } from 'react-redux';
import moment from "moment";
import 'react-big-calendar/lib/addons/dragAndDrop/styles.scss'

const localizer = momentLocalizer(moment);

const DragAndDropCalendar = withDragAndDrop(Calendar)

const MyCalendarConst = () => {
    const roomFilter = useSelector((state) => (state.roomFilter.room));
    const [state, setState] = useState({
        events: [
            {   
                id: 0,
                allDay: true,
                start: moment().toDate(),
                end: moment()
                  .add(1, "days")
                  .toDate(),
                title: "Комната 1",
                room: 1
              },
              {
                id: 1,
                allDay: true,
                start: new Date(2021, 2, 22),
                end: new Date(2021, 2, 23),
                title: "Комната 2",
                room: 2
              },
              {
                id: 2,
                allDay: true,
                start: new Date(2021, 2, 25),
                end: new Date(2021, 2, 26),
                title: "Комната 3",
                room: 3
              }
        ],
        displayDragItemInCell: true,
      })

  

  const handleDragStart = event => {
    setState({ draggedEvent: event })
  }

  const dragFromOutsideItem = () => {
    return state.draggedEvent
  }

  const onDropFromOutside = ({ start, end, allDay }) => {
    const { draggedEvent } = state

    const event = {
      id: draggedEvent.id,
      title: draggedEvent.title,
      start,
      end,
      allDay: allDay,
    }

    setState({ draggedEvent: null })
    moveEvent({ event, start, end })
  }

  const moveEvent = ({ event, start, end, isAllDay: droppedOnAllDaySlot }) => {
    const { events } = state

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

    setState({
      events: nextEvents,
    })

    // alert(`${event.title} was dropped onto ${updatedEvent.start}`)
  }

  const resizeEvent = ({ event, start, end }) => {
    const { events } = state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    setState({
      events: nextEvents,
    })

    //alert(`${event.title} was resized to ${start}-${end}`)
  }

  const newEvent = (_event) => {}
    // let idList = this.state.events.map(a => a.id)
    // let newId = Math.max(...idList) + 1
    // let hour = {
    //   id: newId,
    //   title: 'New Event',
    //   allDay: event.slots.length == 1,
    //   start: event.start,
    //   end: event.end,
    // }
    // this.setState({
    //   events: this.state.events.concat([hour]),
    // })

  
    const filterEvents = () => {
        const returnedEvents = roomFilter == 0? state.events : state.events.filter(event => event.room === roomFilter)
        return returnedEvents;
    }

    return (
      <DragAndDropCalendar
        selectable
        defaultDate={new Date()}
        localizer={localizer}
        events={filterEvents()}
        onEventDrop={moveEvent}
        resizable
        onEventResize={resizeEvent}
        onSelectSlot={newEvent}
        onDragStart={console.log}
        defaultView={Views.MONTH}
        popup={true}
        dragFromOutsideItem={
          state.displayDragItemInCell ? dragFromOutsideItem : null
        }
        onDropFromOutside={onDropFromOutside}
        handleDragStart={handleDragStart}
        style={{ height: "100vh" }}
      />
    )
    }

export default MyCalendarConst
