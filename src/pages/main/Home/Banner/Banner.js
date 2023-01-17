import React from 'react';
import "./Banner.css"
import bannerImage from "../../../../assets/images/banner/bannerImage.jpg"
import flower from "../../../../assets/images/banner/borderFlower.png"

const Banner = () => {
    return (
        <div className='relative'>
            <img className='bannerImage' src={bannerImage} alt="" />
            <h3 className='parallax_text'>latest news</h3>
            <img className='flower' src={flower} alt="" />
        </div>
    );
};

export default Banner;