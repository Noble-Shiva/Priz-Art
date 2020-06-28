import React from 'react';
// import './App.css';
// import Header from './layouts/header/header';
// import Body from './layouts/body/body';
// import Footer from './layouts/footer/footer';
import ImageGallery from './image-gallery';
import axios from 'axios';
// import SimpleReactLightbox from "simple-react-lightbox"; // Import Simple React Lightbox

class ImageGalleryHOC extends React.Component {
  
  constructor() {
    super();
    this.state = {
      isLoading: true,
      images: [],
      error: true
    }
    
    this.getImages()
  }



  getImages() {
    axios({
      url: 'https://prizart.herokuapp.com/',
      method: 'post',
      data: {
        query: 
        `{
          Resources(category:"ladies",type:"image",limit:10,offset:0){
            type,
            url,
            createdOn,
            id,
            title,
            category
          }
        }`
      }
    }).then((result) => {
        console.log('Response : ', result.data.data.Resources);
        let images = result.data.data.Resources;
        console.log('Images : ', images);
        this.setState({
            isLoading: false,
            response: images
        })
      });
  }

  render() {
    return (
      <div>
        {
          this.state.isLoading
          ?'Loading...'
          :{ImageGallery}
        }
        
      </div>
    )
  }
}

export default ImageGalleryHOC;
