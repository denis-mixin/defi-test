import React from 'react';
import animations from '../../../../assets/js/animations';

function Partner({ url, image }) {
    return <li className='main-partners-list-item' data-aos = {animations.fadeUp}>

        <a href={url} target='_blank' >
            <img src={image} alt='' className='main-partners-list-item-img' />
        </a>

    </li>;
}

export default Partner;
