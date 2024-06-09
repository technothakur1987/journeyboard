import React from 'react'
import './Header.css'
import Logo from '../assets/logo.png'
import HomeIcon from '../assets/homeicon.png'
import toolsLogo from '../assets/toolsLogo.png'
import bellLogo from '../assets/bellLogo.png'
import ladyIcon from '../assets/ladyIcon.png'

const Header = () => {
  return (
    <div className='header'>
      <img src={Logo} alt='logo' className='logoimage' />
       <img src={HomeIcon} alt='logo' className='homeIcon' />
      <img src={toolsLogo} alt='logo' className='toolsLogo' />
      <img src={bellLogo} alt='logo' className='bellLogo' /> 
      <img src={ladyIcon} alt='logo' className='ladyIcon' />



    <i className="fa-solid fa-ellipsis-vertical threedotsIcon"></i> 
    

    </div>
  )
}

export default Header