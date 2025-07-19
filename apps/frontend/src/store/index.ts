import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalReducer from './reducers/modalSlice';
import tradesReducer from './reducers/tradesSlice';

const rootReducer = combineReducers({
    trades: tradesReducer,
    modal: modalReducer
});

const store = configureStore({ reducer: rootReducer })


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;