import React from "react";
import logo from '../images/logo.png';
import '../styles/ImagemHello.css';

function ImagemHello() {
    return (
        <section className="Section">
        <img src={logo} className="Section-logo" alt="logo" />
        <p>
          Hello World!
        </p>
      </section>
    );
}

export default ImagemHello;