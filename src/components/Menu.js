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
            <Link to="/portfolio" className={'link'} onClick={e=>setOpen(false)}>
            home
            </Link>
            <Link to="/portfolio/projects" className={'link'} onClick={e=>setOpen(false)}>
            projects
            </Link>
            <Link to="/portfolio/skills" className={'link'} onClick={e=>setOpen(false)}>
            skills
            </Link>
            <Link to="/portfolio/about" className={'link'} onClick={e=>setOpen(false)}>
            about
            </Link>
          </div>
          : <div className={'menuClosed'} onClick={e=>setOpen(false)}/>
          }  
      </>
  )
}

export default Menu;
