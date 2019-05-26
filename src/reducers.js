import { combineReducers } from 'redux'
import {CALL_UP,CALL_DOWN} from './actions'


const initialState = {
    movements: 'stop'
}
function setMovements(state = initialState, action) {
    switch (action.type) {
        case CALL_UP:
            return [...state,{movement: "GOING UPSTAIRS"}]
        case CALL_DOWN:
            return [...state,{movement: "GOING DOWNSTAIRS"}]
    default:
        return state
  }
}

const state = combineReducers({setMovements})
export default state