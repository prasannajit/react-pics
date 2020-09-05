import React from 'react';
import ImageCard from './ImageCard';
import "./ImageList.css";

const ImageList = ({ images }) => {
    console.log(images);
    return (<div className="image-list">
        {images.map((image) => <ImageCard key={image.id} image={image}></ImageCard>)}
    </div>);
};

export default ImageList;