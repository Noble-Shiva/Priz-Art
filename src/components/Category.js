import React, { Component } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { database, storage } from '../config/firebase';
import ArtModal from './ArtModal';

class Category extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoading: true,
            category: this.props.category,
            categoryData: [],
            showModal: false,
            uploadProgress: 0
        }

        console.log(this.props);
    }

    closeModal = () => {
        console.log('Inside Close Modal')
        this.setState({ showModal: false })
    }

    componentDidMount() {
        const { category } = this.state;
        // this.setState({ isLoading: true })
        database.ref(`artData/${category.categoryId}`).on('value', (snapshot) => {
            console.log('Category Data --- ', snapshot.val());
            const data = snapshot.val();
            if (data) {
                const arrayResult = Object.keys(data).map(d => {
                    return { id: d, data: data[d] }
                });
                console.log('Array List : ', arrayResult)
                this.setState({
                    isLoading: false,
                    categoryData: arrayResult
                })
            } else {
                this.setState({
                    isLoading: false,
                    categoryData: []
                })
            }

        }, (error) => console.log('Category Error --- ', error))
    }

    addArt = (category) => {
        console.log('Add Art Category --- ', category.categoryId);
        this.setState({ showModal: true });
    }

    uploadArt = (artData) => {
        console.log('Art Data to Upload --- ', artData);
        this.closeModal();
        // if (artData.artFile === null) {
        //     console.error(`not an image, the image file is a ${typeof (imageAsFile)}`);
        //     return
        // }

        // const uploadTask = storage.ref(`/${this.state.category.categoryId}/${artData.artFile.name}`).put(artData.artFile)
        // //initiates the firebase side uploading 
        // uploadTask.on('state_changed', (snapshot) => {
        //     // progrss function ....
        //     const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        //     this.setState({ uploadProgress: progress });
        // },
        //     (error) => {
        //         // error function ....
        //         console.log(error);
        //     }, () => {
        //         // gets the functions from storage refences the image storage in firebase by the children
        //         // gets the download url then sets the image from firebase as the value for the imgUrl key:
        //         // storage.ref('images').child(artData.artFile.name).getDownloadURL()
        //         //     .then(fireBaseUrl => {
        //         //         setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
        //         //     })
        //         storage.ref(this.state.category.categoryId).child(artData.artFile.name).getDownloadURL().then(url => {
        //             console.log(url);
        //             // this.setState({ url });
        //             // database.ref(this.state.category.categoryId).push().set()
        //             // .then((snapshot) => {
        //             //     console.log('Category Data --- ', snapshot.val());
        //             //     this.setState({
        //             //         isLoading: false,
        //             //         categoryData: snapshot.val()
        //             //     })
        //             // }).catch((error) => console.log('Category Error --- ', error))

        //         })
        //     })
    }

    displayItems = (data) => {
        if (data.length > 0) {
            const list = data.forEach((e) => {
                return (
                    <div key={e.id} className="row text-center text-lg-left">
                        <div className="col-lg-3 col-md-4 col-6">
                            <a className="d-block mb-4 h-100">
                                <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt="" />
                            </a>
                        </div>
                    </div>
                )
            })
            return list;
        } else return <div></div>

    }

    render() {
        const { isLoading, category, categoryData } = this.state;
        const listItems = categoryData.length > 0 ? categoryData.map((d) =>
            <div key={d.id} className="col-lg-3 col-md-4 col-6">
                <div className="d-block mb-4 h-100">
                    <img className="img-fluid img-thumbnail" src={d.data.artImageUrl} alt="" />
                </div>
            </div>) : <div>No Data! Please Upload</div>;
        return (
            <React.Fragment>
                {!isLoading
                    ? <div className="container">
                        <div className="row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h1 className="font-weight-light text-center text-lg-left mt-4 mb-0">{category.categoryName}</h1>
                            <Button variant="outline-primary text-center text-lg-left mt-4 mb-0" onClick={() => this.addArt(category)}>Add</Button>
                        </div>
                        <hr className="mt-2 mb-5" />
                        {/* <div className="row text-center text-lg-left">
                            <div className="col-lg-3 col-md-4 col-6">
                                <a className="d-block mb-4 h-100">
                                    <img className="img-fluid img-thumbnail" src="https://source.unsplash.com/pWkk7iiCoDM/400x300" alt="" />
                                </a>
                            </div>
                        </div> */}
                        <div className="row text-center text-lg-left">
                            {listItems}
                        </div>

                        <ArtModal showModal={this.state.showModal} closeModal={this.closeModal} upload={this.uploadArt} category={category} />
                    </div>
                    : <div>Loading...</div>}
            </React.Fragment>
        )
    }
}

export default Category;