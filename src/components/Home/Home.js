import React from 'react';
import { details } from '../assets/information/data';
import ShowImage from '../ShowImage/ShowImage';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home_container}>
            {details.map((info) => (
                <ShowImage key={info.name} info={info} />
            ))}
        </div>
    )
}

export default Home;