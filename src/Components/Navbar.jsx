import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <div>
            <ul>
                <li>
                    <Link to={'./'}>Home</Link>
                </li>
                <li>
                    <Link to={'./pizza'}>Pizza</Link>
                </li>
                <li>
                    <Link to={'./burger'}>Burger</Link>
                </li>
                <li>
                    <Link to={'./pasta'}>Pasta</Link>
                </li>
            </ul>
        </div>
    );
}