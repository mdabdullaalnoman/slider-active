import React from 'react';
import DataLoad from '../DataLoad/DataLoad';
import Header from '../Header/Header';
import './Home.css';

import './Home.css'

const Home = () => {
    return (
        <div id="gradient-bg">
            <Header></Header>
            <DataLoad></DataLoad>
        </div>
    );
};

export default Home;