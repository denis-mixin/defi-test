import React from 'react'
import animations from '../../../../assets/js/animations'
import images from '../../../../assets/js/images'

function Download({ _body, appleText, appleUrl, googleUrl, googleText, _relativeURL, _ID }) {

    const handleUrl = (url) => {
        return `${_relativeURL(url, _ID)}`;
    }
    return (
        <div className={`main-hero-download`} data-aos = {animations.fadeUp}>
            <span className='main-hero-download-title'>
                {_body}
                <img src={handleUrl(images.download)} />
            </span>
            <div className='main-hero-download-links'>
                <a className='main-hero-download-links-link' href={appleUrl} target='_blank'>
                    <img src={images.apple} />
                    {appleText}
                </a>
                <a className='main-hero-download-links-link' href={googleUrl} target='_blank'>
                    <img src={handleUrl(images.google)} />
                    {googleText}
                </a>
            </div>
        </div>
    )
}

export default Download
