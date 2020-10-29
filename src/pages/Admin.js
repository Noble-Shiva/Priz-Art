import React, { Component } from 'react';
import { auth } from './../config/firebase';
import { database } from '../config/firebase';
import Category from '../components/Category';

class Admin extends Component {
    constructor() {
        super();
        this.state = {
            currentUser: null,
            categories: [],
            isLoading: false
        }
    }

    componentWillMount() {
        var user = localStorage.getItem('User');
        if (user == null) {
            auth.onAuthStateChanged(user => {
                this.setState({ currentUser: user });
                localStorage.setItem('User', user);
            });
        } else {
            this.setState({ currentUser: JSON.parse(user) });
        }

    }

    componentDidMount() {
        this.getArtCategories();
    }

    getArtCategories = () => {
        // const artCategories = [
        //     { categoryName: 'Alphabets', showCategory: 'true', categoryId: 'artAlpha' },
        //     { categoryName: 'Sketches', showCategory: 'true', categoryId: 'artSketch' },
        //     { categoryName: 'Mandala', showCategory: 'true', categoryId: 'artMandala' },
        //     { categoryName: 'Paper-Cuts', showCategory: 'true', categoryId: 'artPaperCuts' },
        // ]
        // database.ref('artCategories').set(artCategories)
        //     .then(() => {
        //         console.log('updated to firebase')
        //     });
        this.setState({ isLoading: true })
        database.ref('artCategories').once('value')
            .then((snapshot) => {
                console.log('Category Data --- ', snapshot.val());
                this.setState({
                    isLoading: false,
                    categories: snapshot.val()
                })
            }).catch((error) => console.log('Category Error --- ', error))

    }

    addArt = (category) => {
        console.log('Category --- ', category);
        this.getArtCategories();
    }

    render() {
        const user = this.state.currentUser;
        const { isLoading, categories } = this.state;
        console.log('Current User --- ', user)
        return (
            <React.Fragment>
                {!isLoading ? <React.Fragment>
                    {user != null
                        ? <React.Fragment>
                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <div className="container">
                                    <a className="navbar-brand">Author</a>
                                    <h3 className="my-4">{user.displayName}</h3>
                                    {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button> */}

                                    <div className="navbar" id="navbarSupportedContent">
                                        <img className="rounded-circle" width={75} height={75} src={user.photoURL} alt="100x100" />
                                    </div>
                                </div>
                            </nav>
                            <div className="container">
                                {categories.map((category) => {
                                    return <Category key={category.categoryId} category={category} />
                                })}
                            </div>
                        </React.Fragment>
                        : <div>Loading...</div>}
                </React.Fragment>
                    : <div>Loading...</div>}
            </React.Fragment>
        )
    }
}

export default Admin;