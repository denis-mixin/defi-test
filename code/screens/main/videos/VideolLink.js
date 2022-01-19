import React from 'react'
import images from '../../../../assets/js/images'

function VideolLink({ url, poster, _body, _relativeURL , _ID}) {
    const handleUrl = (url) => {
        return `${_relativeURL(url, _ID)}`;
    }
    return (
        <a href={url} target='_blank' className='main-videos-video'>
            <img src={handleUrl(poster)} className='main-videos-video-poster' />
            <div className='main-videos-video-content'>
                <section className='main-videos-video-text'>
                    {_body}
                </section>
                <img className='main-videos-video-play' src={handleUrl(images.play)} alt='play' />
            </div>
        </a>
    )
}

export default VideolLink
