import React, { useContext, useState } from 'react';
import {Link} from 'react-router-dom';
import { UserContext } from '../../App';
import logoImg from '../Images/logo-img.png';
import './Header.css';


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
    const [text, setText] = useState('Login'); 
  
    return (
        <div className="container">
            <div className="row pt-3 pb-2 justify-content-between">
                <div className="col-md-1">
                    <img className="logo" src={logoImg} alt="" srcset=""/>
                </div>
                <div className="col-md-6 d-flex pt-3 fw-bold">
                    <Link to="/home" className="nav-link text-dark">Home</Link>
                    <Link to="/destination" className="nav-link text-dark">Destination</Link>
                    <Link to="/home" className="nav-link text-dark">Contact</Link>
                    <Link to="/destination" className="nav-link text-dark">Buy Pass</Link>
                    <Link to="/destination" className="nav-link active text-primary fw-bold">{loggedInUser ? loggedInUser.name : text}</Link>                 
                </div>
            </div>
            <hr/>
        </div>




    );
};

export default Header;