import React, {Component} from 'react';
import './Header.css'
import logo from '../cinelo.jpg'

class Header extends Component{
    render (){
        return(
            <div className="Header">
              <img src={logo} className="App-logo" alt="logo" />
            </div>
        );
    }
}

export default Header;