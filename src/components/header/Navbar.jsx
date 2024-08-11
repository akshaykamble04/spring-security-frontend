import React, { useContext, useState } from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {

  const [visibleItems, setVisibleItems] = useState(0);
  const { isLoggedIn, logout } = useContext(AuthContext);

  const items = [
    { name: 'Pipeline', path: '/pipeline' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleClick = () => {
    if (visibleItems < items.length) {
      setVisibleItems(visibleItems + 1);
    }
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.navItems}>
        <Link to="/" className={styles.navItem}>Dashboard</Link>
        {items.slice(0, visibleItems).map((item, index) => (
          <Link key={index} to={item.path} className={styles.navItem}>
            {item.name}
          </Link>
        ))}
        {isLoggedIn && visibleItems < items.length && (
          <button className={styles.addButton} onClick={handleClick}>+</button>
        )}
        {
          isLoggedIn && (
            <button className={styles.logoutButton} onClick={logout}>
              Logout
            </button>
          )
        }
      </div>
    </div>
  )
}

export default Navbar;