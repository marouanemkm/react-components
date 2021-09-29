import {useState, useEffect} from 'react';
import './Navbar.css';

export default function Navbar() {

    const [toggleMenu, setToggleMenu] = useState();


    return (
        <nav>
            <ul className="liste">
                <li className="items">Accueil</li>
                <li className="items">Service</li>
                <li className="items">Contact</li>
            </ul>
            <button className="btn">Bouton</button>
        </nav>
    );
};