import React from 'react';
import { images } from '../assets/information/data';
import ShowImage from '../ShowImage/ShowImage';
import styles from './Home.module.css';

const Home = () => {
    return (
        <div className={styles.home_container}>
            {images.map((vehicle) => (
                <ShowImage key={vehicle.name} vehicle={vehicle} />
            ))}
        </div>
    )
}

export default Home;