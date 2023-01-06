import {React,useState} from 'react'
import './Products.css'
import plane from '../../assets/plane.png'
import {motion} from 'framer-motion'
import {ProductsData} from '../../data/products'
import {useAutoAnimate} from '@formkit/auto-animate/react'


const Products = () => {
  const [parent] = useAutoAnimate();
  const [menuProducts,setMenuProducts]=useState(ProductsData);
  const filter=(type)=>{
    setMenuProducts(ProductsData.filter((product)=>product.type === type))
  }
  return (
    <div className="container py-5">
      <div className="products-header">
        <img src={plane} className="ms-5" alt="product-header-amazon"></img>
        <h1 className='text-center'>Out Feature Products</h1>
      </div>
      <div className="products-content">
        <div className="products-list">
          <ul>
            <motion.li
            initial={{x:"300px",opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:1.2,type:"spring",stiffness:120}}
             onClick={()=>setMenuProducts(ProductsData)}>All</motion.li>
            <motion.li
            initial={{x:"300px",opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:1.2,type:"spring",stiffness:120}}
             onClick={()=>{filter("skin care")}}>Skin Core</motion.li>
            <motion.li
            initial={{x:"300px",opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:1.2,type:"spring",stiffness:120}}
             onClick={()=>{filter("conditioner")}}>Conditionner</motion.li>
            <motion.li
            initial={{x:"300px",opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:1.2,type:"spring",stiffness:120}}
             onClick={()=>{filter("foundation")}}>Foundation</motion.li>
          </ul>
        </div>
        <div className="products-item" ref={parent} >
        {
          menuProducts.map((product) =>
          <div className="card ss" key={product.id}>
            <div className="card-body">
              <div className="card-title">
                <h5>
                {product.name}
                </h5>
                <h6>{product.type}</h6>
              </div>
              <div className="card-text">
                <h4>
                {product.price}$
                </h4>
              </div>
            </div>
            <div className="card-image">
              <img src={product.img} alt="product-amazon" style={{width:'6rem',height:'11rem'}} />
            </div>
          </div>
          )
        }
        </div>
      </div>
    </div>
  )
}

export default Products