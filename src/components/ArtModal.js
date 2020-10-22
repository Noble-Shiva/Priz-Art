import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { storage, auth, database } from '../config/firebase';

function ArtModal(props) {

    console.log('Art Modal props --- ', props);

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [user, setUser] = useState();

    // localStorage.getItem('User');

    const submitData = () => {
        // const data = {
        //     artTitle: title,
        //     artDescription: description,
        //     artFile: file
        // }

        // setUser()

        // props.upload(data);
        uploadData();
    }

    const { showModal, closeModal, category } = props;

    const uploadData = () => {
        console.log(file);
        if (file === null) {
            console.log(`Please select an image to upload`);
            return
        }

        var user = JSON.parse(localStorage.getItem('User'));
        var artId = Math.random().toString(36).substr(2, 9);
        console.log(artId);

        setProgress(25)

        const uploadTask = storage.ref(`/${category.categoryId}/${artId}`).put(file)
        //initiates the firebase side uploading 
        uploadTask.on('state_changed',
            (snapshot) => {
                // progrss function ....
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                console.log(progress);
                setProgress(50);
            },
            (error) => {
                // error function ....
                console.log(error);
            }, () => {
                // gets the functions from storage refences the image storage in firebase by the children
                // gets the download url then sets the image from firebase as the value for the imgUrl key:

                storage.ref(category.categoryId).child(artId).getDownloadURL().then(url => {
                    console.log(url);
                    const data = {
                        artTitle: title,
                        artDescription: description,
                        artImageUrl: url,
                        artAuthorId: user.uid,
                        artAuthor: user.displayName,
                        artId: artId,
                        categoryId: category.categoryId,
                        timeStamp: new Date()
                    }
                    setProgress(75)
                    // this.setState({ url });
                    database.ref('/artData/').child(category.categoryId).push().set(data)
                        .then((snapshot) => {
                            console.log('Art Uploaded');
                            setProgress(100);
                            setTimeout(() => {
                                props.upload(data);
                            }, 1500);
                        }).catch((error) => console.log('Category Error --- ', error))

                })
            })
    }

    return (
        <>
            <Modal
                show={showModal}
                onHide={closeModal}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Upload Art</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <Form>
                            <Form.Group controlId="artTitle">
                                <Form.Label>Enter Art Title</Form.Label>
                                <Form.Control type="text" placeholder="Art Title" onChange={(e) => setTitle(e.target.value)} />
                            </Form.Group>

                            <Form.Group controlId="artDescription">
                                <Form.Label>Enter Art Description</Form.Label>
                                <Form.Control as="textarea" rows="3" placeholder="Art Description" onChange={(e) => setDescription(e.target.value)} />
                            </Form.Group>

                            <Form.Group>
                                <Form.File id="uploadFileField" label="Browse Art" type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
                            </Form.Group>
                        </Form>
                    </div>


                </Modal.Body>
                {progress === 0
                    ? <Modal.Footer>
                        <Button variant="secondary" onClick={closeModal}>Close</Button>
                        <Button variant="primary" disabled={file == null} onClick={submitData}>Upload</Button>
                    </Modal.Footer>
                    : progress === 100 ?
                        <Modal.Footer>
                            <div>Uploaded!</div>
                        </Modal.Footer> :
                        <Modal.Footer>
                            <div>Uploading .... <progress value={progress} max="100" /></div>
                        </Modal.Footer>
                }


            </Modal>
        </>
    );

}

export default ArtModal;