import React from 'react'
import animations from '../../../../assets/js/animations'
import images from '../../../../assets/js/images'

function Media({ _body, listItems }) {
  
    return (
        <div className='main-media' data-aos = {animations.fadeRight}>
           
            <h3 className='title'>{_body}</h3>
            <ul className='main-media-list'>
                {listItems}
            </ul>
        </div>
    )
}

export default Media
