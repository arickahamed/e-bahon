import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NoMatch.module.css';

const NoMatch = () => {
    return (
        <div className={styles.no_match__container}>
            <h1>404 Error !</h1>
            <h4>Your desired link don't found.</h4>
            <h3>Go to <Link to="/">Home</Link> </h3>
        </div>
    )
}

export default NoMatch;