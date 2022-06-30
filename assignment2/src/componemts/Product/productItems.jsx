import React, { useEffect, useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NumberFormat from "react-number-format";
import AddIcon from "@mui/icons-material/Add";
import ButtonGroup from "@mui/material/ButtonGroup";
import {productSelected} from "../Product/Service/productSlice";
import Context from "../common/context"
import {cartAdded} from "../Product/Service/productSlice";
import { useDispatch } from "react-redux";



export default function ProductItems({data,fullDescription} ) {

    const dispatch = useDispatch();
   // const items= useSelector(selectProducts);
    const { redirect } = useContext(Context);
    useEffect(() => {

    },[]);


    const handleClickCard = () => {
        dispatch(productSelected(data));
        redirect('DETAIL');     
      };

    const handleClickAdd = () =>{
        var newObj = Object.assign({'qty':1}, data);
        dispatch(cartAdded(newObj))
    }

    return (
      
    
        <Card 
        sx={{ maxWidth: 345,marginLeft:'10%' }}
        >

            <img style={{margin : "20px auto", display: "block", height: "140px"}} src={data.image} alt={"Product"} onClick={() => handleClickCard()}/>
            <CardContent style={{  cursor: "pointer" }} onClick={() => handleClickCard()}>
                <Typography gutterBottom variant="h5" component="div">
                    {data.category}
                </Typography>
                <Typography variant="body2" color="text.secondary" 
                sx={ !fullDescription &&
                    {
                    display: "-webkit-box",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    WebkitBoxOrient: 'vertical',
                    WebkitLineClamp: '4',
                    minHeight: "80px",
                    }
                }
                >
                    {data.description}
                </Typography>

            <Typography
            variant="h6"
            sx={{
                fontWeight: "bold",
                marginTop: "10px",
            }}
            >
                <NumberFormat
                    value={data.price}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                    decimalScale={2}
                />
            </Typography>
            </CardContent>

    <CardActions
        sx={{
          borderRadius: 4,
          border: "1px solid rgba(0, 0, 0, 0.12)",
          color: "rgba(0, 0, 0, 0.54)",
          height: "50px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          margin: "20px",
          justifyContent: "space-around",
        }}
      >


        <ButtonGroup>
          <Button
            aria-label="increase"
            onClick={(e) => {
              handleClickAdd();
            }}
          >
            <AddIcon fontSize="small" />
          </Button>
        </ButtonGroup>
      </CardActions>
      </Card>);
}