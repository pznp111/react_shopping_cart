import React, { useState } from "react";
import RoutingManager from "../RoutingManager/RoutingManager";
import { createContext } from "react";
import { Provider } from '../common/context';
import Header from "../Header/header";



const Home = () => {

    //const Context = createContext();
    const [actualPage, setActualPage] = useState('SHOPPING');
    //const Provider = Context.Provider;
    const redirect = (screenName) => {
        setActualPage(screenName);
    };

    return (
        
        <Provider value={{ actualPage, redirect }}>
            <Header />
            <RoutingManager />
        </Provider>
    );
};

export default Home;