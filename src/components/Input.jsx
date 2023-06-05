import React from "react";
import PropTypes from 'prop-types';
import '../styles/Input.css';
function Input(props) {
    return (
        <React.Fragment>
            <input className="Input" type={props.type} placeholder={props.placeholder} />
        </React.Fragment>
    );
}

Input.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,

}

export default Input;