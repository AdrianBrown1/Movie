import React from 'react';
import logo from '../../video-camera.svg';
 
const Header = (props) => {
  
  const refreshHome = () => {
    const { history } = props;
    history.push('/');
  }

  return (
    <div className='header'>
      <button className='header__button' onClick={() => refreshHome()}>
        <img src={logo} className="header__logo" alt="logo" align='left' />
      </button>
    </div>
  )
}

export default Header;