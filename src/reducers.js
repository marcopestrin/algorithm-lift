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
    newList:[],
    nextList:[]
};

function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}

function reducer(state = initialState, action) {  
    console.log("cosa ho chiamato?", action.calledLevel);
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

            if(state.movement === "GOING UPSTAIRS"){
                lists.nextList.push(action.calledLevel)
                //se l'ascensore sta andando su e io chiamo giù io mi preparo la lista da mettere in coda
                //ATTENZIONE DA FARE ANCHE NEL SENSO INVERSO!!
                return Object.assign({}, state, {nextStopAfter:[lists.nextList]})
            } 

            if(state.nextStopOTR < action.calledLevel){
                return Object.assign({}, state, { movement:"GOING DOWNSTAIRS", nextStopOTR:[lists.newList], destination:destination });
            }else{
                return Object.assign({}, state, { movement:"GOING DOWNSTAIRS", nextStopOTR:[lists.newList] });
            }
            
        case HANDLER_POSITION:
            var currentLevel = action.currentLevel
            console.log("------------------",state);  //just for test and debug

            if(state.movement == "stop") {
                if(state.destination == "") {
                    if(state.nextStopAfter != ""){
                        var nextStopAfter = state.nextStopAfter;
                        //quando arrivi a destinazione bisogna cambiare lista e prendere quella che è in coda

                        if(state.destination < state.currentLevel) { //SERVE PER CAMBIARE DIREZIONE DELL'ASCENSORE QUANDO ARRIVA A DESTINAZIONE
                            return Object.assign({}, state, {
                                movement:"GOING DOWNSTAIRS",
                                nextStopOTR: nextStopAfter,
                                destination: nextStopAfter[nextStopAfter.length -1][0],
                                nextStopAfter: []
                            });
                        }else if(state.destination > state.currentLevel) {
                            return Object.assign({}, state, {
                                movement:"GOING UPSTAIRS",
                                nextStopOTR: nextStopAfter,
                                destination: nextStopAfter[nextStopAfter.length -1][0],
                                nextStopAfter: []
                            });
                        }
                    }
                }
            }
            if(state.movement == "GOING UPSTAIRS" && currentLevel < state.destination) {
                //the lift must move
                return Object.assign({}, state, { currentLevel: currentLevel+1 });
            }

            if(state.movement == "GOING DOWNSTAIRS" && currentLevel > state.destination) {
                //the lift must move
                return Object.assign({}, state, { currentLevel: currentLevel-1 });
            }
            
            if(state.currentLevel === state.destination) {
                //THE LIFT HAS ARRIVED AT THE LIMIT SWITCH
                console.log("THE LIFT HAS ARRIVED AT THE LIMIT SWITCH");
                return Object.assign({}, state, {nextStopOTR:[], movement: "stop", destination: "" });
            }

        default:
            return state
    }
}
export default combineReducers({reducer})