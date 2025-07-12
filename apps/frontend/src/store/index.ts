import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tradesReducer from './reducers/tradesSlice';

const rootReducer = combineReducers({
    trades: tradesReducer
});

const store = configureStore({ reducer: rootReducer })


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;