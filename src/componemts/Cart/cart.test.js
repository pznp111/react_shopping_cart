// import React from "react";
// import renderer from "react-test-renderer";
 import { Provider } from  "../common/context";
 import Cart from "../Cart/cart";



const cart = [
    {
        "cartItemIndex": 0,
        "qty": 2,
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "cartItemIndex": 1,
        "qty": 3,
        "id": 3,
        "title": "Mens Cotton Jacket",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    }
];

// jest.mock("react-redux", () => ({
//   useSelector: jest.fn().mockImplementation((selector) => selector()),
//   useDispatch: jest.fn(),
// }));


// jest.mock("../Product/Service/productSlice", () => ({
//     productsLoaded: jest.fn().mockReturnValue(cart),
//     // getCartCost: jest.fn().mockReturnValue(10),
//     // getNumberProductsInCart: jest.fn().mockReturnValue(10),
//   }));

// // jest.mock("./Products/redux/selector", () => ({
// //   getCartProducts: jest.fn().mockReturnValue(cart),
// //   getCartCost: jest.fn().mockReturnValue(10),
// //   getNumberProductsInCart: jest.fn().mockReturnValue(10),
// // }));

// it("renders correctly", () => {
//   const mockRedirect = (value) => value;
//   const mockActualPage = (value) => value;
//   const tree = renderer
//     .create(
//       <Provider value={{ actualPage: mockActualPage, redirect: mockRedirect }}>
//         <Header />
//       </Provider>
//     )
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

 import * as React from 'react';
 import renderer from "react-test-renderer";
 import { shallow } from 'enzyme';
 //import Example from './Example';
// import Button from './Button ';
// import { getIsSpinnerDisplayed } from './selectors';

// jest.mock('react-redux', () => ({
//   useSelector: jest.fn(fn => fn()),
// }));
// jest.mock('./selectors');

// describe('Example', () => {
//   it('should render Button if getIsSpinnerDisplayed returns false', () => {
//     getIsSpinnerDisplayed.mockReturnValue(false);

//     const wrapper = shallow(<Example />);

//     expect(wrapper.find(Button).exists()).toBe(true);
//   });
// });


import {
    isLoading, productsLoaded,productSelected, cartAdded, cartQtyRemoved,cartQtyAdded
  } from '../Product/Service/productSlice';
import Product from '../Product/product';


//   jest.mock('react-redux', () => ({
//     useSelector: jest.fn(fn => fn()),
//     }));
//     jest.mock('../Product/Service/productSlice');
  
  describe('counter reducer', () => {
    const initialState ={
        productsList: [],
        selectedProduct: null,
        isLoading: false,
        carts:cart
    }
    it('should handle loaded', () => {
      expect(productsLoaded(cart, cart)).toEqual({payload:cart,"type": "products/productsLoaded" });
    });


    it("renders correctly", () => {
        const mockRedirect = (value) => value;
        const mockActualPage = (value) => value;
        const tree = renderer
          .create(
           
              <Cart />
            
          )
          .toJSON();
        expect(tree).toMatchSnapshot();
      });

//     describe('Example', () => {
//         it('should render Button if getIsSpinnerDisplayed returns false', () => {
//             productsLoaded.mockReturnValue(false);
//             console.log("productsLoaded**********",productsLoaded)

//             const wrapper = shallow(<Product />);

//             expect(wrapper.find(Button).exists()).toBe(true);
//         });
// });
  
    // it('should handle increment', () => {

    //     const spy = jest.spyOn(redux, 'useSelector')
    //     spy.mockReturnValue({ username:'test' })
    // //   const actual = counterReducer(initialState, increment());
    // //   expect(actual.value).toEqual(4);
    // });
  
    // it('should handle decrement', () => {
    //   const actual = counterReducer(initialState, decrement());
    //   expect(actual.value).toEqual(2);
    // });
  
    // it('should handle incrementByAmount', () => {
    //   const actual = counterReducer(initialState, incrementByAmount(2));
    //   expect(actual.value).toEqual(5);
    // });
  });
