import React from 'react';
import animations from '../../../../assets/js/animations';

function Protocols({ url, image, _body }) {
    return <li className='main-protocols-list-item' data-aos = {animations.fadeUp}>

        <a href={url} target='_blank' >
            <img src={image} alt='' className='main-protocols-list-item-img' />
            {_body}
        </a>

    </li>;
}

export default Protocols;
