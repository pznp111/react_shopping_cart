import React, { useContext, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import {selectProducts} from "../Product/Service/productSlice";
import { useSelector } from "react-redux";
import Badge from "@mui/material/Badge";
import Context from "../common/context"
const Header = () => {

    const items= useSelector(selectProducts);
    console.log("item header",items)
    const { redirect } = useContext(Context);
   
    let CartCounts = 0;
    CartCounts = items.product.carts.length;
    useEffect(() => {
        console.log("item header1",items)
        CartCounts = items.product.carts.length;
      }, [items]);

    const handleClick = (event) => {
       if(CartCounts!=0){
           redirect("CART")
       }
      };
    
    
      const handleClose = () => {
      //  setAnchorEl(null);
      };

      const handleClickHome = () => {
        redirect('SHOPPING');
      };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}
                    onClick={() => {
                        handleClickHome();
                    }}
                    style={{  cursor: "pointer" }}
                >
                    Shopping
                </Typography>
                {(
                    <div>

                    <Badge badgeContent={CartCounts} color="primary">
                        <ShoppingCart  
                        style={{  cursor: "pointer" }}
                        onClick={() => {
                        handleClick();
                    }}/>
                    </Badge>
                    <Menu
                        id="menu-appbar"
                        //anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                       // open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                    </Menu>
                    </div>
                )}
        </Toolbar>
      </AppBar>
    </Box>
    )

};

export default Header;