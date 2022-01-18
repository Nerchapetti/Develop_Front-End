import { useEffect } from 'react'
import { useState } from 'react'
import './Gallery.scss'
import ImageSlider from './ImageSlider'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Gallery = ({parish}) => {
    return (
        <div>
            <ImageSlider parish={parish}/>
        </div>
    )
}

export default Gallery
