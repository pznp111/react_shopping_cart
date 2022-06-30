import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import NumberFormat from "react-number-format";
import {selectProducts, cartQtyRemoved, cartQtyAdded} from "../Product/Service/productSlice";
import { useDispatch, useSelector } from "react-redux";


export default function CartItems({ data}) {
    const items= useSelector(selectProducts);
    const dispatch = useDispatch();
    const handleClickRemove = (e) => {
        console.log("items",items);
        console.log("data",data);
        dispatch(cartQtyRemoved(data.cartItemIndex))
    }
    const handleClickAdd = (e) =>{
        dispatch(cartQtyAdded(data.cartItemIndex))
    }

    

    return (
        <Card
            sx={{
                display: "flex",
                flexDirection: "row",
                height: "160px",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0px 40px",
                marginBottom: "30px",
            }}
        >
      <img style={{ maxHeight: "80px", maxWidth : "50px" }} src={data.image} alt={"Product"}/>
      <Typography
        sx={{
          display: "-webkit-box",
          overflow: "hidden",
          fontWeight : "bold",
          width: "300px",
          textOverflow: "ellipsis",
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: '2',
        }}
        variant="h6"
      >
        {data.title}
      </Typography>

      <Typography variant="body1" color="text.secondary">
                        Quantity:
                        <NumberFormat
                            value={data.qty}
                           
                            displayType={"text"}
                            
                        />
        </Typography> 

        <Typography variant="body1" color="text.secondary">
                        Price:
                        <NumberFormat
                            value={data.price}
                            prefix={"$"}
                            displayType={"text"}
                            thousandSeparator={true}
                            decimalScale={2}
                        />
        </Typography> 
      <div style={{display : "flex", flexDirection :  "row", alignItems : "center"}}>
        <Paper
          sx={{
            borderRadius: 4,
            border: "1px solid rgba(0, 0, 0, 0.12)",
            color: "rgba(0, 0, 0, 0.54)",
            height: "50px",
            width: "190px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            margin: "20px",
            justifyContent: "space-around",
          }}
        >
          {/* <Badge badgeContent={count} color="primary">
            <ShoppingCart />
          </Badge> */}

          <ButtonGroup>
            <Button
              aria-label="reduce"
              onClick={(e) => {
                handleClickAdd(e);
              }}
            >
              <AddIcon fontSize="small" />
            </Button>

            <Button
              aria-label="reduce"
              onClick={(e) => {
                handleClickRemove(e);
              }}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            
          </ButtonGroup>
        </Paper>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            width : "120px"
          }}
        >
          <NumberFormat
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            decimalScale={2}
          />
        </Typography>
      </div>
    </Card>

    )
    
}
