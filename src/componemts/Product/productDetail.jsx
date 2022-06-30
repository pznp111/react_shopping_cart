import React from "react";
import Container  from "../common/ui/container";
import ProductItems from "./productItems";
import { useSelector } from "react-redux";
import { selectProducts } from "./Service/productSlice";
const ProductDetail = () => {
    const data = useSelector(selectProducts);
    return (
        <Container>
          <ProductItems data = {data.product.selectedProduct} fullDescription ={true} />
        </Container>
      );

};

export default ProductDetail;