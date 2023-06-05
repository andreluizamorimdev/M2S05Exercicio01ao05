import React from "react";
import '../styles/Header.css';

function Header() {
    const nome = "André Luiz";
    return (
        <div className="Header">
            <h1>{nome}, Bem vindo</h1>
        </div>
    );
}

export default Header;