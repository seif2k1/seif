import React from 'react'
import './Compare.css'

//import Compare Images
import ReactCompareImage from 'react-compare-image'
import Before from '../../assets/before.png'
import After from '../../assets/after.png'
import img from '../../assets/shade.png'

const Compare = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-5" id="virtual-content">
                <div className="virtual-name mb-2">
                    <h3>Virtual Try-On</h3>
                </div>
                <div className="virtual-details mb-2">
                    <h5>never buy the wrong shade again</h5>
                </div>
                <div className="virtual-footer">
                    <h4>Try Now!!</h4>
                    <img src={img}></img>
                </div>
            </div>
            <div className="col-lg-7" id="wrapper">
                <div className="vitual-compare">
                <ReactCompareImage leftImage={Before} rightImage={After}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Compare