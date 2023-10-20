import React from 'react';
import ImgSlider from './HomeComponent/Slider/ImgSlider';
import Notice from './HomeComponent/Notice/Notice';
import MentorsCard from './HomeComponent/MentorsCard/MentorsCard';
import Gallery from './HomeComponent/Gallery/Gallery';

const Home = () => {
    
    return (
        <div>
            <ImgSlider/>
            <Notice/>
            <MentorsCard/>
            <Gallery/>
        </div>
    );
};

export default Home;