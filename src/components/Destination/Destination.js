import { useContext } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import infoContext from "../../context/infoContext";
import map from "../assets/images/Map.png";
import styles from "./Destination.module.css";

const Destination = () => {
    const { getInfo } = useContext(infoContext);
    console.log(getInfo);
    return (
        <div className={styles.container}>
            <h2>Destination</h2>
            <div className={styles.info_container}>
                <div className={styles.vehicle_info}>
                    <div className={styles.card_info}>
                        <div className={styles.card_top}>
                            <h3>Mirpur 1</h3>
                            <h3>Farmgate</h3>
                        </div>
                        <div className={styles.first_info}>
                            <img src={getInfo.img} alt={getInfo.name} />
                            <h4>{getInfo.name}</h4>
                            <div className={styles.icon_info}>
                                <BsFillPersonFill />
                                <h4>4</h4>
                            </div>
                            <h4>$68</h4>
                        </div>
                        <div className={styles.first_info}>
                            <img src={getInfo.img} alt={getInfo.name} />
                            <h4>{getInfo.name}</h4>
                            <div className={styles.icon_info}>
                                <BsFillPersonFill />
                                <h4>4</h4>
                            </div>
                            <h4>$68</h4>
                        </div>
                        <div className={styles.first_info}>
                            <img src={getInfo.img} alt={getInfo.name} />
                            <h4>{getInfo.name}</h4>
                            <div className={styles.icon_info}>
                                <BsFillPersonFill />
                                <h4>4</h4>
                            </div>
                            <h4>$68</h4>
                        </div>
                    </div>
                </div>
                <div className={styles.map_image}>
                    <img src={map} alt={map} />
                </div>
            </div>
        </div>
    );
};

export default Destination;
