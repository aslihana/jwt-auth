import React from "react";
import axios from 'axios';
import {withRouter} from 'react-router';
import { useHistory } from "react-router-dom";

const Navbar = () => {
    const history = useHistory();

    const Logout = async() => {
      try {
        await axios.delete('http://localhost:5000/logout');
        history.push("/");
      } catch(error) {
        console.log(error);
      }
    }

    return (
        <nav class="navbar is-light" role="navigation" aria-label="main navigation">
        <div className="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </a>
      
          <a href="/" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      
        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
            <a href="/" class="navbar-item">
              Home
            </a>  
          </div>
      
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                
                <button onClick={Logout} className="button is-light">
                  Log Out
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </nav> 
    )
}

export default withRouter (Navbar);