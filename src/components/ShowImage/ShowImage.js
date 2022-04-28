import React from 'react';
import styles from './ShowImage.module.css';

const ShowImage = ({vehicle}) => {
    const {img, name} = vehicle;
    return (
        <div className={styles.image_details}>
            <img src={img} alt={name} />
            <h3>{name}</h3>
        </div>
    )
}

export default ShowImage;