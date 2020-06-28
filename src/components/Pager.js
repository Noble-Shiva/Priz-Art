import React from 'react';
import Gallery from "react-photo-gallery";
import { SRLWrapper } from "simple-react-lightbox"; // Import SRLWrapper


class Pager extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        let images = this.props.images;
        // var images = [
        //     {
        //       url: "https://images.unsplash.com/photo-1577279549270-b9e297533cdd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
        //       desc: 'Person wearing shoes',
        //       sub: 'Gift Habeshaw',
        //       id: 1
        //     },
        //     {
        //       url: "https://images.unsplash.com/photo-1577277625082-36df4915ebeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
        //       desc: 'Blonde woman wearing sunglasses smiling at the camera ',
        //       sub: 'Dmitriy Frantsev',
        //       id: 2
        //     },
        // ]

        const imgStyle = {
            width : '150px',
            height : '150px',
            borderRadius: '5px',
            padding: '10px'
        }

        const divStyle = {
            display: 'flex',
            flex: 1,
            flexWrap: 'wrap',
            justifyContent: 'center'
        }

        return (
            <SRLWrapper>
                {getImages(images)}
                {/* {<Gallery photos={images} />} */}
            </SRLWrapper>
        );

        function getImages(images) {
            return (
                <div style={divStyle}>
                    {images.map((e) => (
                        <img key={e.id} style={imgStyle} src={e.src}  alt={e.title}></img>
                    ))}
                </div>
            )
        }
    }
    
}

export default Pager;