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
                room: 1,
                participants: ["Бэлиг", "Данил"]
              },
              {
                id: 1,
                start: new Date(2021, 2, 22, 14, 0),
                end: new Date(2021, 2, 23, 14, 30),
                title: "Комната 2",
                room: 2,
                participants: ["Леха", "Данил"]
              },
              {
                id: 2,
                start: new Date(2021, 2, 25, 16, 0),
                end: new Date(2021, 2, 25, 17, 0),
                title: "Комната 3",
                room: 3,
                participants: ["Влад", "Лиза"]
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