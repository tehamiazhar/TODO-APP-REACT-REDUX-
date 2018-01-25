import { createStore } from 'redux'
import { combineReducers } from 'redux';
import addtodo from './reducers/addtodo';
import deletetodo from './reducers/deletetodo';
import edittodo from './reducers/edittodo';


export const rootReducer = combineReducers({
    addtodo,
    deletetodo,
    edittodo
})

let store = createStore(rootReducer)

store.subscribe(() =>
  console.log(store.getState())
);

export default store;
