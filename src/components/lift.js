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
        let lift = (
            <div className="Skyscraper">

                <div className="Level">4</div>
                <button className="up" onClick={this.props.callUp}>UP!</button>
                <button className="down" onClick={this.props.callDown}>DOWN!</button>

                <div className="Level">3</div>
                <button className="up">UP!</button>
                <button className="down">DOWN!</button>

                <div className="Level">2</div>
                <button className="up">UP!</button>
                <button className="down">DOWN!</button>

                <div className="Level">1</div>
                <button className="up">UP!</button>
                <button className="down">DOWN!</button>

            </div>
        );
        return lift
    }

}

const mapStateToProps = state => ({
    
})
const mapDispatchToProps = (dispatch) => ({
    callUp: () => dispatch(callUp()),
    callDown: () => dispatch(callDown()),
})

export default connect(mapStateToProps,mapDispatchToProps)(liftComponent);