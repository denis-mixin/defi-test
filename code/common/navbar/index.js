import React from "react";
import animations from "../../../assets/js/animations";
import images from "../../../assets/js/images";

const Navbar = ({orbsUrl, defiUrl, _relativeURL, _ID, _body}) => {
  const handleUrl = (url) => {
    return `${_relativeURL(url, _ID)}`;
  }
  return (
    <nav className="navbar">
      <div className='navbar-flex grid'>
      <a className={`navbar-left`} href='/'  data-aos = {animations.fadeRight}>
        <img src={handleUrl(images.defiNotifyLogo)} alt='logo' />
        <h4>DeFi Notifications</h4>
      </a>
      <div className={`navbar-links`} data-aos = {animations.fadeLeft} >
        <section className='navbar-links-text'>
        {_body}
        </section>
        <a className='navbar-links-link navbar-links-orbs' href={orbsUrl} target='_blank'>
          <img src={handleUrl(images.orbsLogoWithName)} alt='orbs logo' className='navbar-links-link-logo' />
          <img src={handleUrl(images.arrowRight)} alt='orbs logo' className='navbar-links-link-arrow' />
        </a>
        <a className='navbar-links-link navbar-links-defi' href ={defiUrl} target='_blank'>
          <img src={handleUrl(images.defiLogoWithName)} alt='defi logo' className='navbar-links-link-logo' />
          <img src={handleUrl(images.arrowRight)} alt='orbs logo' className='navbar-links-link-arrow' />
        </a>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
