import React from 'react'
import animations from '../../../../assets/js/animations'
import images from '../../../../assets/js/images'

function Title({ _body, _relativeURL, _ID }) {
    const handleUrl = (url) => {
        return `${_relativeURL(url, _ID)}`;
    }
    return (
        <div className={`main-hero-title`} data-aos = {animations.fadeRight}>
            <img src={handleUrl(images.bell)} className={` main-hero-title-bell`} />
            <img src={handleUrl(images.publicBeta)} className={` main-hero-title-beta`} />
            {_body}
        </div>
    )
}

export default Title
