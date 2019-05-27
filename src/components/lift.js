import React from 'react';
import {connect} from 'react-redux'
import {callUp, callDown} from '../actions'
import './lift.css';


class liftComponent extends React.Component {

    constructor(props){
        super(props);
    }

    componentDidMount(){

    }
    
    render() {
        var level = []; 
        for (var i = 10; i > 3; i--) {
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
            <div className="Skyscraper">{level}</div>
        );
        return lift
    }

}

const mapStateToProps = state => ({
    
})
const mapDispatchToProps = (dispatch) => ({
    callUp: (i) => dispatch(callUp(i.thisLevel)),
    callDown: (i) => dispatch(callDown(i.thisLevel)),
})

export default connect(mapStateToProps,mapDispatchToProps)(liftComponent);