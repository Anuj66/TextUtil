import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    const handleColor = (event) => {
        props.toggleBg(event.target.value);
    }

    return (
       <>
           <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
               <div className="container-fluid">
                   <Link className="navbar-brand" to={"/"}>{props.title}</Link>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                           data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                           aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                           <li className="nav-item">
                               <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                           </li>
                           <li className="nav-item">
                               <Link className="nav-link" to="/about">About</Link>
                           </li>

                       </ul>
                       <div className="btn-group mx-3" role="group" aria-label="Basic radio toggle button group">
                           <button className="btn btn-primary mx-1" type="submit" value="#e1a7a7" onClick={handleColor}>Pink Background</button>
                           <button className="btn btn-primary mx-1" type="submit" value="#38537b" onClick={handleColor}>Dark Blue Background</button>
                           <button className="btn btn-primary mx-1" type="submit" value="white" onClick={handleColor}>Default Background</button>
                       </div>
                       {/*<div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>*/}
                       {/*    <input className="form-check-input" onClick={props.toggleMode("#e1a7a7")} type="checkbox" role="switch" id="flexSwitchCheckDefault" />*/}
                       {/*    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Pink Mode</label>*/}
                       {/*</div>*/}
                       <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                           <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                               <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                       </div>
                   </div>
               </div>
           </nav>
       </>
    );
}

Navbar.propTypes = {
    title: propTypes.string.isRequired,
}