import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            <React.Fragment>
                {/* <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a className="navbar-brand" href="#">Priz Art</a>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="#">Gallery<span className="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Admin</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav> */}

                <section>
                    <div className="bg">
                        <div style={{ paddingTop: 'calc(100vh - 20vh)', color: 'black' }}>
                            <nav className="navbar navbar-light">
                                <div className="container">
                                    <a className="navbar-brand" href="/" style={{ color: 'black', fontWeight: 'bold', fontSize: '30px' }}>PrizArt</a>
                                    <div className="collapse navbar-collapse">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item active" style={{ padding: '10px 10px 10px 0px', textDecoration: 'none' }}>
                                                <Link to="/gallery" style={{ color: 'black', fontWeight: 'bold' }}>Gallery</Link>
                                            </li>
                                            <li className="nav-item" style={{ padding: '10px', textDecoration: 'none' }}>
                                                <Link to="/" style={{ color: 'black', fontWeight: 'bold' }}>About</Link>
                                            </li>
                                            <li className="nav-item" style={{ padding: '10px', textDecoration: 'none' }}>
                                                <Link to="/" style={{ color: 'black', fontWeight: 'bold' }}>Contact</Link>
                                            </li>
                                            <li className="nav-item" style={{ padding: '10px', textDecoration: 'none' }}>
                                                <Link to="/" style={{ color: 'black', fontWeight: 'bold' }}>Admin</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Landing;