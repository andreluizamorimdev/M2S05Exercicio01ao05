import React from "react";
import PropTypes from "prop-types";
import '../styles/Botao.css';

function Botao(props) {
    return (
        <React.Fragment>
            <button className="Botao">{props.value}</button>
        </React.Fragment>
    );
}

Botao.propTypes = {
    value: PropTypes.string.isRequired
};

export default Botao;