import React, {Component} from 'react'
import {connect} from 'react-redux';
import {goUp, goDown} from '../actions';
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

const setMovement = (filter) => {
    switch(filter){
        case 'CALL_UP':
            return setMovement.goUp;
        case 'CALL_DOWN':
            return setMovement.goDown;
    }
}
const mapStateToProps = (state,ownProps) => {
    return {
        setMovement:ownProps.movement === state.movement
    }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        onClick: () => {
            dispatch(goDown(ownProps.movement))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(liftRender)
