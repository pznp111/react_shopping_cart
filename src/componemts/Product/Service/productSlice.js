import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from "../../../api/productAPI";

const initialState ={
    productsList: [],
    selectedProduct: null,
    isLoading: false,
    carts:[]
}


  export const fetchProductsAsync = (amount) => async (dispatch) => {
    dispatch(isLoading(true));
    const response = await getProducts(amount);
   // console.log("response",response)
    dispatch(productsLoaded(response));
    //return response;
  };
const productSlice = createSlice({
    name: 'products',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
      isLoading: (state,action) => {
        state.isLoading = action.payload;
      },
      productsLoaded(state, action) {
        console.log(action)
        state.productsList = action.payload
        state.isLoading = false;
      },
      productSelected(state, action) {
        //console.log("productSelected***",action)
        state.selectedProduct = action.payload
      },
      cartAdded(state,action){
        var newObj = Object.assign({'cartItemIndex':state.carts.length}, action.payload);
        state.carts.push(newObj)
      },
      cartQtyRemoved(state,action){

        state.carts =  state.carts.map(product => {
          if (product.cartItemIndex === action.payload) {
            if(product.qty !== 0){
              return {...product, qty: product.qty-1}
            }
          };
          return product;
        });
      },
      cartQtyAdded(state,action){
        state.carts =  state.carts.map(product => {
          if (product.cartItemIndex === action.payload) {
            return {...product, qty: product.qty+1}
          };
          return product;
        });
      },
      cartCheckOut(state,action){
        //preform API call.
        state.carts = [];
      }
      
    },
  });

  const { actions, reducer } = productSlice;

  export const { isLoading, productsLoaded,productSelected, cartAdded, cartQtyRemoved,cartQtyAdded,cartCheckOut } = actions;
  export const selectProducts = (state) => state;


  export default reducer;