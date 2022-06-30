import React, { useContext, useEffect } from "react";
import {selectProducts} from "../Product/Service/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import NumberFormat from "react-number-format";
import Button from "@mui/material/Button";
import {cartCheckOut} from '../Product/Service/productSlice';
import Context from "../common/context"
    



const CartSummary = () => {
    const dispatch = useDispatch();
    const { redirect } = useContext(Context);
    const items= useSelector(selectProducts);
    //console.log("cart summary",items.product.carts);
    let totalCost = 0;
    let totalNumber = 0;

    totalCost = items.product.carts.reduce((sum, obj) =>{
        return sum + (obj.qty * obj.price);
    }, 0);

    totalNumber =  items.product.carts.reduce((sum, obj) =>{
        return sum + obj.qty;
    }, 0);

    useEffect(() => {
        totalCost = items.product.carts.reduce((sum, obj) =>{
            return sum + obj.price;
        }, 0);
    },[items]);


    const handleCheckout = () => {
        dispatch(cartCheckOut([]));
        redirect('SHOPPING')
      };

    return (
        <Grid container  direction="column" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            <Grid item xs={6}>
                <Typography variant="body1" color="text.secondary">
                    Total Number: {totalNumber}
                </Typography>  
            </Grid>
            <Grid item xs={6}>
                
                    <Typography variant="body1" color="text.secondary">
                        Total Cost: 
                        <NumberFormat
                            value={totalCost}
                            prefix={"$"}
                            displayType={"text"}
                            thousandSeparator={true}
                            decimalScale={2}
                        />
                    </Typography>  
                
            </Grid>

            <Grid item xs={6}>
                <Button
                    sx={{
                    textTransform: "none",
                    fontWeight: "bold",
                    marginTop: "100px",
                    }}
                    variant="contained"
                    onClick={() => {
                    handleCheckout();
                    }}
                >
                    Checkout
                </Button>
            </Grid>
        </Grid>
            
            );


    

}
export default CartSummary;