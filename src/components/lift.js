import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import './lift.css';

let lift = ({onClick, text}) => (
    <div className="Skyscraper">

        <div className="Level">4</div>
        <button className="up" onclick="callUp()">UP!</button>
        <button className="down" onclick="callDown()">DOWN!</button>

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

lift.propTypes = {
   /* onClick: PropTypes.func.isRequired,
    text:PropTypes.string.isRequired
    */
}
const liftComponent = connect()(lift)

export default liftComponent;