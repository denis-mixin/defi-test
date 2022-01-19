import React from 'react'
import animations from '../../../../assets/js/animations'

function subTitle({ _body }) {
    return (
        <div className={`main-hero-subtitle`} data-aos = {animations.fadeUp}>
            {_body}
        </div>
    )
}

export default subTitle
