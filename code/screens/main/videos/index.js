import React from 'react'
import animations from '../../../../assets/js/animations'
import images from '../../../../assets/js/images'

function Videos({title, videoLinks, _relativeURL, _ID}) {
    const handleUrl = (url) => {
        return `${_relativeURL(url, _ID)}`;
    }
    return (
        <div className={`main-videos`} data-aos = {animations.fadeUp}>
            <img src = {handleUrl(images.videos.shadow)} className='main-videos-shadow' />
            <img src = {handleUrl(images.videos.mobileShadow)} className='main-videos-mobile-shadow' alt='shadow' />

            <div className='main-videos-grid'>
            <h2 className='title'>{title}</h2>
            <div className='main-videos-flex'>
                {videoLinks}
            </div>
            </div>
        </div>
    )
}

export default Videos
