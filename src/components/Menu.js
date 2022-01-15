import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../styles/Menu.css';
import Hamburger from 'hamburger-react'

const Menu = (props) => {
  const [isOpen, setOpen] = useState(false)
  return(
       <>
       <nav className='nav'>
        <Hamburger toggled={isOpen} toggle={setOpen} direction='left' color="#F4F3EE"/> 
        </nav>
          {
            isOpen  ?
            <div className={'menuOpen'}>
            <Link to="/portfolio" className={'link'}>
            home
            </Link>
            <Link to="/projects" className={'link'}>
            projects
            </Link>
            <Link to="/skills" className={'link'}>
            skills
            </Link>
            <Link to="/about" className={'link'}>
            about
            </Link>
          </div>
          : <div className={'menuClosed'} />
          }  
      </>
  )
}

export default Menu;
