import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signInWithGoogle } from "../config/firebase";

class LoginPage extends Component {

    constructor({ navigation }) {
        super()
        console.log(navigation);
    }

    handleSignInWithGoogle = () => {
        console.log('Inside handleSignInWithGoogle')
        signInWithGoogle().then((user) => {
            console.log('Logged in User --- ', user);
            var userData = {
                displayName: user.user.displayName,
                email: user.user.email,
                photoURL: user.user.photoURL,
                uid: user.user.uid
            };
            localStorage.setItem('User', JSON.stringify(userData));
        }).catch((error) => console.log('Login Error --- ', error))
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                            <div className="card card-signin my-5">
                                <div className="card-body">
                                    <h5 className="card-title text-center">Sign In</h5>
                                    <form className="form-signin">
                                        <div className="form-label-group">
                                            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                                            <label htmlFor="inputEmail">Email address</label>
                                        </div>

                                        <div className="form-label-group">
                                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                            <label htmlFor="inputPassword">Password</label>
                                        </div>

                                        <div className="custom-control custom-checkbox mb-3">
                                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                                        </div>
                                        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</button>
                                        <hr className="my-4" />
                                        <Button variant="danger" block={true} onClick={() => this.handleSignInWithGoogle()}> <FontAwesomeIcon transform="left-10" size="1x" width={2} icon={['fab', 'google']} color="white" /> Sign in with Google</Button>
                                        <Button variant="primary" block={true}> <FontAwesomeIcon transform="left-10" size="1x" width={2} icon={['fab', 'facebook']} color="white" /> Sign in with Facebook</Button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default LoginPage;