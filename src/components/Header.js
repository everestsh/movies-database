import React from 'react'
import {Link} from 'react-router-dom'

import '../CSS/Header.css';

const Header = () =>{

    return(
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand" ><img width="40px" alt="" src="./Lambda-Logo-Red.png"/>Redux Module Project</span>
      </nav> 
    );
}

export default Header;
