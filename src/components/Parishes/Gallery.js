import { useEffect } from 'react'
import { useState } from 'react'
import './Gallery.scss'

const Gallery = ({parish}) => {
    const [imageUrls, setimageUrls] = useState(parish.gallery)
    return (
        <div className="gallery-container">
            {!imageUrls && <h1>No Extra medias found</h1> }
            {imageUrls && 
                imageUrls.map(imageUrl => (
                    <div className="iamge">
                        <img src={imageUrl} alt="not found" />
                    </div>
                ))
            }
        </div>
    )
}

export default Gallery
