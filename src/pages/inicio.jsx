import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import logo from '../componentes/logo.png';
import { Link } from 'react-router-dom';
import { HouseDoorFill, Book, Search } from 'react-bootstrap-icons';

function Inicio() {
    return (
        <div className="sidebar">
            <Link to="/">
                <img className='logo' src={logo} alt="Logo" />
                <font color="white">TrackMelody</font>
            </Link>
            <ul>
                <li>
                    <div className="violet-container">
                        <div><Link to="/inicio"><font color="white"><HouseDoorFill className="me-2" />Inicio</font></Link></div>
                        <div><Link to="/inicio"><font color="white"><Search className="me-2" />Buscar</font></Link></div>
                    </div>
                </li>
                <li>
                    <div className="violet-container">
                        <Link to="/"><font color="white"><Book className="me-2" />Biblioteca</font></Link>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default Inicio;