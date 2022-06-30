import React, { useCallback, useContext, useEffect } from "react";
import Product from "../Product/product";
import ProductDetaill from "../Product/productDetail";
import Context from "../common/context"
import Cart from "../Cart/cart";
export const RoutingManager = () => {
const { actualPage } = useContext(Context);
const getActiveRoutes = useCallback(()=>{
    
        let currentRoute = null;
        
        switch(actualPage){
            case 'SHOPPING':{
                currentRoute = <Product />
                break;
            }
            case 'DETAIL':{
                console.log("DETAIL")
                currentRoute = <ProductDetaill />
                break;
            }
            case 'CART':{
                currentRoute = <Cart />
                break;
            }
            default: {
                currentRoute = <Product />
                break;
            }
           
        }
        return currentRoute;
})

    return <div>{getActiveRoutes()}</div>
};

export default RoutingManager;
