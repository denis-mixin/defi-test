import React from 'react'
import animations from '../../../../assets/js/animations'

function MediaItem({ image, _body, url }) {
    return (
        <li className={`main-media-list-item`} data-aos = {animations.fadeUp}>
            <a href={url} target='_blank'>
                <figure className='main-media-list-item-poster'>
                <img src={image}  />
                </figure>
                <div className='main-media-list-item-body'>
                {_body}
                </div>
            </a>
        </li>
    )
}

export default MediaItem
