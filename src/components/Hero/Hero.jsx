import React from 'react'
import logo from "../../assets/hero.png"
import './Hero.css'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <div className="container">
      <div className="row " id="content">
        <div className="col-md-2 col-12 " id="seif-1">
          <div className="row">
          <div className=" col-12 hero-left-top">
          <h4 className=''>Sun<br/>Protection<br/>Cream</h4>
          </div>
          <div className=" col-12 hero-left-bottom">
          <h4 className=''>Trendy<br/>Collector<br/></h4>
          <p className="w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, perspiciatis!</p>
          </div>
          </div>
        </div>
        <div className="col-md-8 col-12" id="seif-2">
          <div className="kk">
            <div className="row">
              <div className="col-md-7 col-12" id="seif-2-1">
          <motion.span
          initial={{y:"-20px",opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:1.5}}
          className="blue-circle">
          </motion.span>
          <motion.img
          alt='hero-amazon'
          initial={{y:"40px",opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{duration:1.5}}
          src={logo}>
          </motion.img>
          </div>
              <div className="col-md-5 col-12" id="seif-2-2">
          <motion.div 
          initial={{x:"-20px",opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{duration:1.5}}
              className="content-footer">
            <motion.div 
              className="content-footer-right">
              <motion.svg
               xmlns="http://www.w3.org/2000/svg" width="46" height="46" fill="currentColor" className=" bi bi-bag-fill" viewBox="0 0 16 16">
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
              </motion.svg>
            </motion.div>
            <div className="content-footer-left">
              <motion.h5
              >Best SignUp<br/>Offers</motion.h5>
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
            </div>
          </motion.div>
          </div>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-12 " id="seif-3">
          <div className="hero-right-top">
          <h1 className=''>1.5m</h1>
          <h6>Monthly traffic</h6>
          </div>
          <div className="hero-right-bottom">
          <h1 className=''>100K</h1>
          <h6>happy Customers</h6>
          </div></div>
      </div>
    </div>
  )
}

export default Hero