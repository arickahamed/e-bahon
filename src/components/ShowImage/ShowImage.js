import React from 'react';
import styles from './ShowImage.module.css';

const ShowImage = ({info}) => {
    const {img, name} = info;
    return (
        <div className={styles.image_details}>
            <img src={img} alt={name} />
            <h3>{name}</h3>
        </div>
    )
}

export default ShowImage;