import React from "react";
import PropTypes from 'prop-types';
import logo from '../images/logo.png';
import '../styles/ImagemHello.css';

function ImagemHello(props) {
    return (
        <section className="Section">
        <img src={logo} className="Section-logo" alt="logo" />
        <p>
          {props.texto}
        </p>
      </section>
    );
}

ImagemHello.propTypes = {
  texto: PropTypes.string.isRequired
};

export default ImagemHello;