import {
    configureStore,
    combineReducers,
    getDefaultMiddleware
  } from "@reduxjs/toolkit";
  import counterSlice from "./CounterSlice";
  import testSlice from "./TestSlice";
  import filterSlice from "./FilterSlice";
  
  const reducer = combineReducers({
    counter: counterSlice,
    test: testSlice,
    roomFilter: filterSlice
  });
  
  const store = configureStore({
    reducer: reducer
  });
  
  export default store;