import React from "react";
import images from "../../../assets/js/images";

const Footer = ({left, right, bottom}) => {
  return <footer className="footer">
    <img src = {images.footer.shadow} className='footer-shadow' alt='shadow' />
    <img src = {images.footer.mobileShadow} className='footer-mobile-shadow' alt='shadow' />
    <div className='footer-grid'>
      <div className='footer-flex'>
        {left}
       {right}
      </div>
      {bottom}
    </div>
  </footer>;
};

export default Footer;
