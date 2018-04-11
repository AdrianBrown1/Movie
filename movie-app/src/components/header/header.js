import React from 'react';
import logo from '../../video-camera.svg';
 
const Header = (props) => {

   function refreshHome() {
    // grab history from props & push home. 
    const { history } = props;
    console.log(history);
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