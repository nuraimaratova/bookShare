import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import logo from './logo.png';
import fire from './config/Fire';


class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            

            <div class="container-fluid">
            <div className="container center">
        <nav className="menu">
            <h1 className="menu__logo">BookShare</h1>

            <div className="menu__right">
                <ul className="menu__list">
                    <li className="menu__list-item"><a className="menu__link menu__link--active" href="#">Home</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#">About</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#">Portfolio</a></li>
                    <li className="menu__list-item"><a className="menu__link" href="#">Contact</a></li>
                </ul>

                

                <form className="menu__search-form hide" method="POST">
                    <input className="menu__search-input" placeholder="Type and hit enter" />
                </form>
            </div>
        </nav>
    </div>
                <h1 class="display-1">Welcome Home</h1>
                <button onClick={this.logout} class="btn btn-warning">Logout</button>
                
            </div>
        );

    }

}

export default Home;