import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <footer>
                <h5>all rights reserved @2022 || <a className={styles.link} href="https://github.com/arickahamed" target="_blank" rel="noreferrer" > Arick Ahamed Joy</a></h5>
            </footer>
        </div>
    )
}

export default Footer;