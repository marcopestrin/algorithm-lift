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
                if(state.nextStopOTR > 1 && state.nextStopOTR < 10){
                    console.log("creo lista fermate");
                    //creo lista delle fermate
                    return Object.assign({}, state, { movement:"GOING UPSTAIRS", nextStopOTR:[lists.newList], destination:destination });
                }
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
                if(state.nextStopOTR > 1 && state.nextStopOTR < 10){
                    return Object.assign({}, state, { movement:"GOING DOWNTAIRS", nextStopOTR:[lists.newList], destination:destination });
                }
                return Object.assign({}, state, { movement:"GOING DOWNSTAIRS", nextStopOTR:[lists.newList], destination:destination });
            }else{
                return Object.assign({}, state, { movement:"GOING DOWNSTAIRS", nextStopOTR:[lists.newList] });
            }
            
        case HANDLER_POSITION:
            var currentLevel = action.currentLevel
            if(state.movement == "GOING UPSTAIRS") {
                alert("yess!!") //debuggin!!!
            }
            return Object.assign({}, state, {  });

        default:
            return state
    }
}
export default combineReducers({reducer})