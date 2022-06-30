import React, { useEffect } from "react";

import ProductItems from "./productItems";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts,fetchProductsAsync} from "../Product/Service/productSlice";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: '0',
  border:'none',
  boxShadow:'none',
  color: theme.palette.text.secondary,
}));

const Product =() =>{

    const dispatch = useDispatch();

    const items= useSelector(selectProducts);
    let pageSize = 20;

   

    useEffect(() => {
        
         console.log("products1",items);
        if (items  && items.product  && items.product.productsList.length === 0) {

           dispatch(fetchProductsAsync(pageSize));

        //    console.log("products",items);
        //     items.product.productsList.map((data)=>{
        //     console.log("data",data);
        //      });


    
        }
       }, []);

     
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>

            {
                (items.product.productsList).map((data,index)=>{

                  return  <Grid item xs={3}>
                        <Item> <ProductItems data = {data}  fullDescription = {false} key={index}/></Item>
                    </Grid>
                })
            }


            </Grid>
      </Box>
        
    )
}
export default Product;
