import React from 'react'
import images from '../../../assets/js/images'

function FooterLeft({ socials, _relativeURL, _ID, defiUrl, orbsUrl }) {
    const handleUrl = (url) => {
        return `${_relativeURL(url, _ID)}`;
      }
    return (
        <div className='footer-left'>
            <section className='footer-left-title'>
                Proudly contributed by <a href={orbsUrl} target='_blank'><img src={handleUrl(images.orbsLogoWithName)} /></a> to the 
                {' '}<a href={defiUrl} target='_blank'><img src={handleUrl(images.defiLogoWithName)} /></a> accelerator
            </section>

            <div className='socials'>
                {socials}
            </div>
        </div>
    )
}

export default FooterLeft
