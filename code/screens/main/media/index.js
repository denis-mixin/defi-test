import React from 'react'
import animations from '../../../../assets/js/animations'
import images from '../../../../assets/js/images'

function Media({ _body, listItems, _relativeURL, _ID }) {
    const handleUrl = (url) => {
        return `${_relativeURL(url, _ID)}`;
    }
    return (
        <div className='main-media' data-aos = {animations.fadeRight}>
            <img src = {handleUrl(images.media.shadow)} className='main-media-shadow' alt='shadow' />
            <h3 className='main-media-title'>{_body}</h3>
            <ul className='main-media-list'>
                {listItems}
            </ul>
        </div>
    )
}

export default Media
