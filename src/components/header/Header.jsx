import React from 'react'
import './header.module.css'
import img from '../../assets/logo.png'
import {motion} from 'framer-motion'
const link ={
  hover:{
    scale:1.1,
    transition:{
      duration:0.2,
      repeat:Infinity,
      repeatType:"reverse"
    }
  }
}
const Header = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <motion.a
                animate={{scale:0.8}}
                transition={{duration:1.1,repeat:Infinity,repeatType:"reverse"}}
                 className="navbar-brand" href="#"><img src={img} alt='header-amazon' style={{height:"40px",width:"40px"}}></img></motion.a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto  mb-2 mb-lg-0 ">
                    <li className="nav-item">
                    <motion.a
                    variants={link}
                    whileHover="hover"
                     className="nav-link active"  href="#">Collections</motion.a>
                    </li>
                    <li className="nav-item">
                    <motion.a 
                    variants={link}
                    whileHover="hover"className="nav-link"href="#">Brounds</motion.a>
                    </li>
                    <li className="nav-item">
                    <motion.a
                    variants={link}
                    whileHover="hover"
                     className="nav-link" href="#">News</motion.a>
                    </li>
                    <li className="nav-item">
                    <motion.a
                    variants={link}
                    whileHover="hover"
                     className="nav-link" href="#">Soldes</motion.a>
                    </li>
                    <li className="nav-item">
                    <motion.a
                    variants={link}
                    whileHover="hover"
                     className="nav-link" href="#">END</motion.a>
                    </li>
                     </ul>
                    <form className="d-flex align-items-center mx-4"  role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box2-heart" viewBox="0 0 16 16">
                        <path d="M8 7.982C9.664 6.309 13.825 9.236 8 13 2.175 9.236 6.336 6.31 8 7.982Z"/>
                        <path d="M3.75 0a1 1 0 0 0-.8.4L.1 4.2a.5.5 0 0 0-.1.3V15a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4.5a.5.5 0 0 0-.1-.3L13.05.4a1 1 0 0 0-.8-.4h-8.5Zm0 1H7.5v3h-6l2.25-3ZM8.5 4V1h3.75l2.25 3h-6ZM15 5v10H1V5h14Z"/>
                        </svg>
                    </form>
                </div>
            </div>
            </nav>
    </div>
  )
}

export default Header