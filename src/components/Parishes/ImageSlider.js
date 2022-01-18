import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import './Gallery.scss'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const ImageSlider = ({ parish }) => {
    const [imageUrls, setimageUrls] = useState(parish.gallery)
    const [current,setCurrent] = useState(0)
    const length = parish.gallery.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current+1);
    }
    
    console.log(current)

    const prevSlide = ()=>{
        setCurrent(current === 0 ? length-1 : current-1)
    }


    if(!Array.isArray(parish.gallery) || length <= 0){
        return null;
    }


    return (
        <section className="slider">
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
            {!imageUrls && <h1>No Extra medias found</h1> }
            {imageUrls && 
                imageUrls.map((imageUrl,index) => {
                    return(
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<img src={imageUrl} alt="not found" className='image' />)}
                            
                        </div>
                    ) 
                    
                    
                })
            }

        </section>
        
        
    )
}

export default ImageSlider


