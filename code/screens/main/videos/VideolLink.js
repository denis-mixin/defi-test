import React from 'react'
import images from '../../../../assets/js/images'

function VideolLink({ url, poster, _body }) {
    return (
        <a href={url} target='_blank' className='main-videos-video'>
            <img src={poster} className='main-videos-video-poster' />
            <div className='main-videos-video-content'>
                <section className='main-videos-video-text'>
                    {_body}
                </section>
                <img className='main-videos-video-play' src={images.play} alt='play' />
            </div>
        </a>
    )
}

export default VideolLink
