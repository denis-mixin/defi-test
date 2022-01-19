import React from "react";
import images from "../../../assets/js/images";

const Footer = ({left, right, bottom, _relativeURL, _ID}) => {
  const handleUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  }
  return <footer className="footer">
    <img src = {handleUrl(images.footer.shadow)} className='footer-shadow' alt='shadow' />
    <img src = {handleUrl(images.footer.mobileShadow)} className='footer-mobile-shadow' alt='shadow' />
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
