import React, {Component} from 'react'
import {connect} from 'react-redux';
import {callUp, callDown} from '../actions';
import LiftRender from '../components/lift'


class liftRender extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <LiftRender />
        )
    }

}

export default liftRender
