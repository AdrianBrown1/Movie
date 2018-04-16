import React from 'react';
import logo from '../../video-camera.svg';
 
const Header = (props) => {
  
  const refreshHome = () => {
    const { history } = props;
    // Check why error page is broken.
    history.push('/');
    console.log('HEADER', history);
  }

  return (
    <div className='header'>
      <button className='header__button' onClick={() => refreshHome()}>
        <img src={logo} className="header__logo" alt="logo"/>
      </button>
    </div>
  )
}

export default Header;