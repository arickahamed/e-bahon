import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import infoContext from '../../context/infoContext';
import styles from './ShowImage.module.css';

const ShowImage = ({info}) => {
    let navigate = useNavigate();
    const {setGetInfo} = useContext(infoContext);
    const {img, name} = info;

    const handleClick = (information) => {
        setGetInfo(information);
        navigate("./destination");
    }
    return (
        <div onClick={()=>handleClick(info)} className={styles.image_details}>
            <img src={img} alt={name} />
            <h3>{name}</h3>
        </div>
    )
}

export default ShowImage;