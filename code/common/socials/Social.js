import React from 'react'

function Social({ url, image }) {
    return (
        <a href={url} target='_blank' className='socials-link'>
            <img src={image} />
        </a>
    )
}

export default Social
