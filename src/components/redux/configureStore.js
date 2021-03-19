import {
    configureStore,
    combineReducers,
    getDefaultMiddleware
  } from "@reduxjs/toolkit";
  import filterSlice from "./FilterSlice";
  import eventSlice from "./EventSlice";
  import personFilterSlice from "./PersonFilterSlice";
  
  const reducer = combineReducers({
    roomFilter: filterSlice, 
    personFilter: personFilterSlice,
    eventReducer: eventSlice,

  });
  
  const store = configureStore({
    reducer: reducer
  });
  
  export default store;