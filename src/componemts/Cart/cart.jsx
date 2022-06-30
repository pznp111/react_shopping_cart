import React, { useContext, useEffect } from "react";
import {selectProducts} from "../Product/Service/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CartItems from "./cartItems";
import CartSummary from "./cartSummary";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Cart = () => {
    const items= useSelector(selectProducts);
    console.log("cart item",items.product.carts);
    

    return (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
                {(items.product.carts).map((data,index)=>{
                   return <Item><CartItems data={data}/></Item>
                })
                }
            </Grid>
            <Grid item xs={4}>
              <Item><CartSummary /></Item>
            </Grid>
            
          </Grid>
        </Box>
      );

}
export default Cart;