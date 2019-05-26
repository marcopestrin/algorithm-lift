import { combineReducers } from 'redux'
import {CALL_UP,CALL_DOWN} from './actions'

const initialState = {
    "movements": "stop",
    "next stop OTR": "",
    "next stop after": "",
    "destination": "",
    "current level": ""
}
function reducer(state = initialState, action) {
    switch (action.type) {
        case CALL_UP:
            return [...state,{movement: "GOING UPSTAIRS"}]
        case CALL_DOWN:
            return [...state,{movement: "GOING DOWNSTAIRS"}]
    default:
        return state
  }
}
export default combineReducers({reducer})