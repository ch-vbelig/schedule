import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

const eventSlice = createSlice({
    name: "counter",
    initialState: {
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
                title: "Комната 22",
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
    },

    reducers: {
        changeEvent: ( state, action ) => {
            const { events } = action.payload;
            console.log(events);
            return {...state, events: events}
        }
    }
});


export const {changeEvent} = eventSlice.actions;

export default eventSlice.reducer