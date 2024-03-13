import { combineReducers, createStore } from "redux";
import CounterReducer from "./CounterReducer";

const rootReducer = combineReducers({
    counter: CounterReducer
})
export const store = createStore(rootReducer)