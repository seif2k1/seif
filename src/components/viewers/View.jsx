import React from 'react'
import img from '../../assets/testimonialHero.png'
import './View.css'
import {TestimonialsData} from '../../data/testimonials'
// Import Swiper styles
import {Swiper,SwiperSlide} from 'swiper/react'
import {Pagination, Navigation,FreeMode,Autoplay} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {motion} from 'framer-motion'

const View = () => {
  return (
    <div className='container'>
        <div className="view-header">
            <div className="row">
                <div className="col-lg-3 col-12" id='seif-1-1'>
                    <h1>TOP RATED</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores tenetur, facere magni eveniet deserunt cumque. Illo laboriosam repellendus repellat sint ullam. Quam aut quibusdam, eum eos illo commodi esse alias?</p>
                </div>
                <motion.div
          initial={{y:"20px",opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:1.5}}
                 className="col-lg-6 col-12" id="image">
                    <img src={img} alt="" />
                </motion.div>
                <div className="col-lg-3 col-12" id="seif-1-2">
                    <h1>100K</h1>
                    <p>Lorem ipsum dolor<br/> sit amet, consectetur</p>
                </div>
            </div>
        </div>
        <div className="viewrs my-3"><h1>REVIEWRS</h1></div>
        <div className="view-content">
      <motion.div
          initial={{x:"-300px",opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:1.5}}
           className="view">
    <Swiper style={{position:"unset",width:"80%"}}
      // install Swiper modules
        breakpoints={
          {
            320:{
              slidesPerView:1,
            },
            768:{
              slidesPerView:2,
            },
            1000:{
              slidesPerView:3,
            }
          }
        }
        navigation={true}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        freeMode={true}
        modules={[FreeMode, Pagination,Navigation,Autoplay]}
        className="mySwiper"
      grabCursor
    >
      {TestimonialsData.map((monial,index)=>
      <SwiperSlide>
        <div className="card" id='card-1' key={index}>
          <div className="card-body">
            <div className="card-image">
                <img  src=
              {monial.image}
              alt="viewrs-amazon"
              ></img>
            </div>
            <div className="card-subtitle my-3">
              {monial.comment}
            </div>
            <div className="card-title text-center">
              <h1>
              {monial.name}
              </h1>
            </div>
          </div>
        </div>
      </SwiperSlide>
      )}
    </Swiper>
      </motion.div>
      </div>
    </div>
  )
}

export default View