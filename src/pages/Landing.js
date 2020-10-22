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
                    <div style={{width: '100%', height: '100vh', overflow: 'hidden', backgroundImage:"url(" + "https://source.unsplash.com/LAaSoL0LrYs/1920x1080" + ")", backgroundSize:'cover'}}>
                        <div style={{paddingTop: 'calc(100vh - 30vh)', color: 'white'}}>
                            <nav className="navbar navbar-light">
                                <div className="container">
                                    <a className="navbar-brand" href="#" style={{color: 'white', fontWeight: 'bold'}}>Priz Art</a>
                                    <div className="expand navbar-expand" id="navbarResponsive">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item active" style={{padding: '10px 10px 10px 0px', textDecoration: 'none'}}>
                                                {/* <a className="nav-link" href="/gallery" style={{color: 'white', fontWeight: 'bold'}}>Gallery</a> */}
                                                <Link to="/gallery" style={{color: 'white', fontWeight: 'bold'}}>Gallery</Link>
                                            </li>
                                            <li className="nav-item" style={{padding: '10px', textDecoration: 'none'}}>
                                                {/* <a className="nav-link" href="/about" style={{color: 'white', fontWeight: 'bold'}}>About</a> */}
                                                <Link to="/" style={{color: 'white', fontWeight: 'bold'}}>About</Link>
                                            </li>
                                            <li className="nav-item" style={{padding: '10px', textDecoration: 'none'}}>
                                                {/* <a className="nav-link" href="#" style={{color: 'white', fontWeight: 'bold'}}>Contact</a> */}
                                                <Link to="/" style={{color: 'white', fontWeight: 'bold'}}>Contact</Link>
                                            </li>
                                            <li className="nav-item" style={{padding: '10px', textDecoration: 'none'}}>
                                                {/* <a className="nav-link" href="#" style={{color: 'white', fontWeight: 'bold'}}>Admin</a> */}
                                                <Link to="/" style={{color: 'white', fontWeight: 'bold'}}>Admin</Link>
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