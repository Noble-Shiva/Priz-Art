import React, { Component } from 'react';
// import render from 'react-dom';
import { Link } from 'react-router-dom';
import '../../App.css';

class Header extends Component {

    constructor(props) {
        super(props);
        console.log('Received Props : ', props);
        this.state = {
            showMenu: false
        }
    }

    showMenu() {
        this.setState({ showMenu: !this.state.showMenu })
    }

    render() {
        return (
            <nav className="App-header">
                <div>
                    <Link to="/">Logo</Link>
                </div>
                <div className="App-links">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="Menu-btn" onClick={this.showMenu.bind(this)}>
                    <span>Menu</span>
                </div>
                {
                    this.state.showMenu ?
                        <div className="App-links-menu">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div> : ''
                }

            </nav>
        );
    }

}

export default Header