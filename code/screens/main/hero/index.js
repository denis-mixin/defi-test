import React from 'react'
import animations from '../../../../assets/js/animations'
import images from '../../../../assets/js/images'

const Hero = ({ title, subTitle, download, description }) => {
    return (
        <div className='main-hero grid'>
            <div className='main-hero-left'>
                {title}
                {subTitle}
                {download}
            </div>
            <div className={`main-hero-right`}>
                {description}
            </div>
        </div>
    )
}

export default Hero
