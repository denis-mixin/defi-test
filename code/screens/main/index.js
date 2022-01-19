import React from "react";
import animations from "../../../assets/js/animations";
import images from "../../../assets/js/images";

const Main = ({ hero, videos, learnMore, media, _relativeURL, _ID }) => {
  const handleUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  }
  return (
    <div className="main">
      <img src={handleUrl(images.globeFigure)} className={` main-globe`} alt='globe' />
      <img src={handleUrl(images.mobile.globe)} className='main-mobile-globe' />
      <img src={handleUrl(images.heroShadow)} className='main-shadow' alt='shadow' />
      {hero}
      {videos}
      {learnMore}
      {media}
      <script
        type='module'
        src={handleUrl('/assets/js/main/index.js')}
      />
    </div>
  );
};


export default Main;
