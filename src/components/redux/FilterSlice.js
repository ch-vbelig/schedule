import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "counter",
    initialState: {
        room: 0,
    },

    reducers: {
        changeRoomFilter: ( state, action ) => {
            const { roomNumber } = action.payload;
            console.log(roomNumber);
            return {...state, room: roomNumber}
        }
    }
});


export const {changeRoomFilter} = filterSlice.actions;

export default filterSlice.reducer