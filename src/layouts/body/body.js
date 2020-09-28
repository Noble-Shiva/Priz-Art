import React from 'react';
import axios from 'axios';
import { photos } from '../../components/photos';
import ImageGallery from '../../components/image-gallery'; 

class Body extends React.Component {

  constructor() {
    super();
    this.state = {
      isLoading: false,
      images: [],
      error: true
    }
      
    //this.getImages()
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
        });
        this.showFooter();
    });
  }

  showFooter() {
    console.log('Show Footer');
  }

  render() {
    return (
      <div>
        {/* Body Works! */}
        {
          this.state.isLoading
          ?'Loading...'
          :(
            <ImageGallery /> 
          )
          
        }
      </div>
    );
  }
}

export default Body;