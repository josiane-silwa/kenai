import React, { useState } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci"
import { IoIosNotificationsOutline } from "react-icons/io"
import { FiAlignRight } from "react-icons/fi"
import { CiUser } from "react-icons/ci"

const Header = () => {

  const [ showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className={styles.header}>
      <h1 className={styles.gradient}>Kenai</h1>
      <Link to="/">
                
      </Link>
      <nav 
        className={`${styles.menuSandwich} ${ showMenu ? styles.show : '' }`}
        onClick={toggleMenu}
      >
          <Link to="/"><CiSearch /></Link>
          <Link to="/">Inicio</Link>
          <Link to="/sobre" className='btn btn-red' >Minha lista</Link>
          <Link to="/notificacao"><IoIosNotificationsOutline/></Link>
          <Link to="/perfil"><CiUser/></Link>
        </nav>
        <div 
          className={styles.menuButton}
          onClick={toggleMenu}
        >
          <FiAlignRight className={styles.icon}/>
        </div>
    </header>
  )
}

export default Header
