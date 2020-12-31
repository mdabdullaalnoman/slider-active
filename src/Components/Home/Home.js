import React from 'react';
import DataLoad from '../DataLoad/DataLoad';
import Header from '../Header/Header';


import './Home.css'

const Home = () => {
    return (
        <div className="bg-gradient">
            <Header></Header>
            <DataLoad></DataLoad>
        </div>
    );
};

export default Home;