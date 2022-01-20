import React from 'react';
import animations from '../../../../assets/js/animations';
import images from '../../../../assets/js/images';

function Protocols({ _body, list, _relativeURL, _ID }) {
    const handleUrl = (url) => {
        return `${_relativeURL(url, _ID)}`;
    }
    return <div className='main-protocols grid' data-aos = {animations.fadeUp}>
         <img src = {handleUrl(images.protocols.shadow)} className='main-protocols-shadow' alt='shadow' />
        <h3 className='title'>{_body}</h3>
        <ul className='main-protocols-list'>
            {list}
        </ul>
    </div>;
}

export default Protocols;
