import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { Row, Col } from "react-bootstrap";
// import Product from "../components/Product";
import { listProducts } from "../Actions/productActions";
// import Loader from "../components/Loader";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList); //grab product data from state
//   const { loading, products } = productList;
  useEffect(() => {
    dispatch(listProducts()); //firing of the action to get the products and send it through the reducer down into the state
  }, [dispatch]); //to avoid warning in console
  console.log(productList);
  return (<></>
    // <>
    //   {loading ? (
    //     <Loader />
    //   ) : (
    //     <Row>
    //       {products.map((el) => (
    //         <Col sm={12} md={6} lg={4} xl={3}>
    //           {/* <Product product={el} /> */}
    //           {console.log(el)}
    //         </Col>
    //       ))}
    //     </Row>
    //   )}
    // </>
  );
};
export default HomeScreen;
