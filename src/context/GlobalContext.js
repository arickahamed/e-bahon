import { useContext, useState } from 'react';
import infoContext from './infoContext';

const GlobalContext = (props) => {
    const [getInfo, setGetInfo] = useState({});
    const [user, setUser] = useState({});

    console.log(user);
    return (
        <infoContext.Provider value={{user, getInfo, setUser, setGetInfo}}>
            {props.children}
        </infoContext.Provider>
    );
};

export const UserAuth = () => {
    return(useContext(infoContext));
};

export default GlobalContext;