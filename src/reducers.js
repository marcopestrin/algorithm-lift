import { combineReducers } from 'redux'
import {CALL_UP,CALL_DOWN,HANDLER_POSITION} from './actions'

const initialState = {
    movement: "stop",
    nextStopOTR: [],
    nextStopAfter: "",
    destination: "",
    currentLevel: 1
}
const lists = {
    oldList:[],
    newList:[]
};

function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

function reducer(state = initialState, action) {  
    switch (action.type) {
        case CALL_UP:
            lists.oldList = state.nextStopOTR;
            lists.newList.push(action.calledLevel);
            lists.newList.sort(); // sort my array to create a progressive step of level
            lists.newList = uniq(lists.newList); //just one stop for each level
            var destination = lists.newList[lists.newList.length - 1]; //get the last element of array (bigger number)

            if(state.nextStopOTR < action.calledLevel){
                console.log("il piano è stradafacendo");
                //controllato se il livello selezionato è stradafacendo
                return Object.assign({}, state, { movement:"GOING UPSTAIRS", nextStopOTR:[lists.newList], destination:destination });
            }else{
                return Object.assign({}, state, { movement:"GOING UPSTAIRS", nextStopOTR:[lists.newList] });
            }

        case CALL_DOWN:
            lists.oldList = state.nextStopOTR;
            lists.newList.push(action.calledLevel);
            lists.newList.sort(); 
            lists.newList.reverse(); 
            lists.newList = uniq(lists.newList);
            var destination = lists.newList[lists.newList.length - 1];
            if(state.nextStopOTR < action.calledLevel){
                return Object.assign({}, state, { movement:"GOING DOWNSTAIRS", nextStopOTR:[lists.newList], destination:destination });
            }else{
                return Object.assign({}, state, { movement:"GOING DOWNSTAIRS", nextStopOTR:[lists.newList] });
            }
            
        case HANDLER_POSITION:
            var currentLevel = action.currentLevel
            console.log(currentLevel);
            if(state.movement == "GOING UPSTAIRS" && currentLevel < state.destination) {
                //the lift must move
                return Object.assign({}, state, { currentLevel: currentLevel+1 });
            }

            if(state.movement == "GOING DOWNSTAIRS" && currentLevel > state.destination) {
                //the lift must move
                return Object.assign({}, state, { currentLevel: currentLevel-1 });
            }

            //THE LIFT HAS ARRIVED AT THE LIMIT SWITCH
            return Object.assign({}, state, { destination: "", nextStopOTR:[] });

        default:
            return state
    }
}
export default combineReducers({reducer})