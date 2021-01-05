import React, { useState } from 'react';
import SliderInfo from '../../FakeData/SliderInfo';
import SliderLeft from '../SliderLeft/SliderLeft';
import SliderRight from '../SliderRight/SliderRight';
// import Swiper core and required components
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// install Swiper components
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay]);

const DataLoad = () => {
    const [showData, setShowData ] = useState([]);
    const handelShowData = (data) => {
        setShowData([data]);
    }

        
    
    return (
        <div>
            <div className="container">
                <div className="row my-5 justify-content-center align-items-center">
                    <div className="col-12 col-md-4">
                        {
                            showData.map( LeftInfo => <SliderLeft LeftInfo={LeftInfo}></SliderLeft>)
                        }
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="row">
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={3}
                            // navigation
                            loop={true}
                            autoplay={{
                                delay:2000,
                                disableOnInteraction:false
                            }}
                            pagination={{ clickable: true }}
                            // scrollbar={{ draggable: true }}
                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                            >
                            {
                                    SliderInfo.map( data => ( 
                                        <SwiperSlide>                                        
                                            <div className="col-md-3">
                                               <div className=" mx-auto">
                                                    <img onClick={() =>handelShowData(data)}  src={data.image} className="image-fluid" style={{height:'300px' }} alt="image"/>
                                                    <h5 style={{color:'white'}}>{data.tittle}</h5>
                                                </div>
                                            </div>                                     
                                        </SwiperSlide>
                                    ))
                                }
                            ...
                         </Swiper>
                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DataLoad;