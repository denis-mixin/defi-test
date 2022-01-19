import React from 'react'
import animations from '../../../../assets/js/animations'
import images from '../../../../assets/js/images'

function LearnMore({ title, url, _body, _relativeURL , _ID}) {

    const handleUrl = (url) => {
        return `${_relativeURL(url, _ID)}`;
    }

    return (
        <div className={`main-learn-more`} data-aos = {animations.fadeUp}>
            <h4 className='main-learn-more-title'>{title}</h4>
            <a href={url} target='_blank' className='main-learn-more-link'>
                <img src={handleUrl(images.orbsLogo)} className='main-learn-more-link-orbs-logo' />
                {_body}
                <img src={handleUrl(images.arrowRight)} className='main-learn-more-link-arrow' />
            </a>
        </div>
    )
}

export default LearnMore
