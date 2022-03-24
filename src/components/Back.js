import React from 'react';
import '../styles/Back.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";

const Back = (props) => {
  return(
    <Link to="/portfolio" className='back-icon'>
       <FontAwesomeIcon icon={faHome} size="lg" />
    </Link>
  )

 
}

export default Back;
