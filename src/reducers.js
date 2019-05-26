import { combineReducers } from 'redux'
import {CALL_UP,CALL_DOWN} from './actions'

const initialState = {
    movement: "stop",
    nextStopOTR: "",
    nextStopAfter: "",
    destination: "",
    currentLevel: ""
}
function reducer(state = initialState, action) {
    switch (action.type) {
        case CALL_UP:
            return Object.assign({}, state, { movement:"GOING UPSTAIRS" });
        case CALL_DOWN:
            return Object.assign({}, state, { movement:"GOING DOWNSTAIRS" });
        default:
            return state
    }
}
export default combineReducers({reducer})