import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../assets/image.png'

export default function CommonCompo(props) {
  return (
    <>
       <section className='py-5 my-md-5 '>
          <div className="container">
               <div className="row">
                   <div className="text-center text-md-start col-md-6 align-self-center order-1 order-md-0">
                        <h1 className='mb-3'>Grow your <span className='text-primary'>Business</span> <br /> with Us!!</h1>
                        <p className='mb-4'>{props.desc}</p>
                        <Link to={props.visit} className='btn btn-outline-primary rounded-5'>{props.btnName}</Link>
                   </div>
                   <div className="col-md-6 order-0 order-md-1 mb-3 mb-md-0  animated">
                        <img src={image1 } alt="This is home Image"  className='img-fluid'/>
                   </div>
               </div>
          </div>
       </section> 
    </>
  )
}
