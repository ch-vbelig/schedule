import {
    configureStore,
    combineReducers,
    getDefaultMiddleware
  } from "@reduxjs/toolkit";
  import counterSlice from "./CounterSlice";
  import testSlice from "./TestSlice";
  import filterSlice from "./FilterSlice";
  import eventSlice from "./EventSlice";
  
  const reducer = combineReducers({
    counter: counterSlice,
    test: testSlice,
    roomFilter: filterSlice, 
    eventReducer: eventSlice
  });
  
  const store = configureStore({
    reducer: reducer
  });
  
  export default store;