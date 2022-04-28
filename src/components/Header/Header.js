import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { IoIosMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    const [hamMenu, setHamMenu] = useState(false);
    // console.log(hamMenu);
    return (
        <div className={styles.header_container}>
            <div className={styles.header_logo}>
                <h3>e-bahon</h3>
            </div>
            <nav className={`${styles.header_nav} ${hamMenu ? styles.show_ham_menu : ""}`}>
                <ul>
                    <li>
                        <Link onClick={()=>setHamMenu(false)} className={styles.link} to="/">Home</Link>
                    </li>
                    <li>
                        <Link onClick={()=>setHamMenu(false)} className={styles.link} to="/destination">Destination</Link>
                    </li>
                    <li>
                        <Link onClick={()=>setHamMenu(false)} className={styles.link} to="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link onClick={()=>setHamMenu(false)} className={styles.link} to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link onClick={()=>setHamMenu(false)} className={styles.link} to="/login">Login</Link>
                    </li>
                </ul>
            </nav>

            {/* for mobile */}
            <div className={styles.hamburger_menu}onClick={()=>setHamMenu(!hamMenu)}>
                {hamMenu ? <FaTimes className={styles.danger_color} /> : <IoIosMenu /> }
            </div>
        </div>
    )
}

export default Header;