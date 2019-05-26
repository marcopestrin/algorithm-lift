import React from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import classes from './lift.css';

let lift = ({onClick, text}) => (
    <div>
        <p>here!</p>
    </div>
);

lift.propTypes = {
    onClick: PropTypes.func.isRequired,
    text:PropTypes.string.isRequired
}
const liftComponent = connect()(lift)

export default liftComponent;