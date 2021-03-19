import { createSlice } from "@reduxjs/toolkit";

const personFilterSlice = createSlice({
    name: "counter",
    initialState: {
        person: "",
    },

    reducers: {
        changePersonFilter: ( state, action ) => {
            const { person } = action.payload;
            console.log(person);
            return {...state, person: person}
        }
    }
});


export const {changePersonFilter} = personFilterSlice.actions;

export default personFilterSlice.reducer