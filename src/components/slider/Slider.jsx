import React from 'react'
import './Slider.css'
import {motion} from 'framer-motion'
import {SliderProducts} from '../../data/products'
// Import Swiper styles
import {Swiper,SwiperSlide} from 'swiper/react'
import {Pagination, Navigation,FreeMode,Autoplay} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const Slider = () => {
  return (
    <div className="container">
      <motion.div
          initial={{x:"-300px",opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:1.5}}
       className="seif">
    <Swiper style={{position:"unset"}}
      // install Swiper modules
        breakpoints={
          {
            320:{
              slidesPerView:1,
            },
            820:{
              slidesPerView:2,
            },
            1000:{
              slidesPerView:3,
            }
          }
        }
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Pagination,Navigation,Autoplay]}
        className="mySwiper"
      grabCursor
    >
      {SliderProducts.map((slide)=>
      <SwiperSlide>
        <div className="card" id='card' key={slide.id}>
          <div className="card-body">
            <div className="card-title">
              <h1>
              {slide.name}
              </h1>
              <h5>{slide.type}</h5>
            </div>
            <div className="card-subtitle">
              <h4>
              {slide.detail}
              </h4>
            </div>
            <div className="card-text">
              <h5>
              {slide.price}$
              </h5>
            </div>
          </div>
          <div className="card-image">
            <img src={slide.img} alt="slider-amazon"  />
          </div>
        </div>
      </SwiperSlide>
      )}
    </Swiper>
      </motion.div>
    </div>
  )
}

export default Slider