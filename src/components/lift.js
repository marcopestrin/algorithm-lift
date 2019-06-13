import React from 'react';
import {connect} from 'react-redux'
import {callUp, callDown, handlerPosition} from '../actions'
import './lift.css';


class liftComponent extends React.Component {

    constructor(props){
        super(props);
    }
    componentDidMount(){
        this.intervalId = setInterval(
            () => {
                this.props.handlerPosition(this.props.currentLevel.reducer.currentLevel)
            },
            3000
        );
    }

    render() {

        var level = []; 
        for (var i = 9; i > 0; i--) {
            const thisLevel = i;
            level.push(
                <div>
                    <div className='Level'>{thisLevel}</div>
                    <button className='up' onClick={()=>this.props.callUp({thisLevel})}>UP!</button>
                    <button className='down' onClick={()=>this.props.callDown({thisLevel})}>DOWN!</button>
                </div>
            );
        }
        let lift = (
            <div>
                <div><h1>{this.props.currentLevel.reducer.currentLevel}</h1></div>
                <div className="Skyscraper">{level}</div>
            </div>
        );
        return lift
    }

} 

const mapStateToProps = state => ({
    currentLevel: state
})
const mapDispatchToProps = (dispatch) => ({
    handlerPosition: (currentLevel) => dispatch(handlerPosition(currentLevel)),
    callUp: (i) => dispatch(callUp(i.thisLevel)),
    callDown: (i) => dispatch(callDown(i.thisLevel)),
})

export default connect(mapStateToProps,mapDispatchToProps)(liftComponent);