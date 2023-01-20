import React from "react";
import "./ProductsCardsAL.scss";
import Images from "../../../../components/Images/Images";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductsCardsAL = () => {
  const newArrival = [
    {
      img: Images.wood,
      label: "Designer Dark Brown Oak Wooden Chair",
      seller: "Indonesia Seller",
      rating: 3,
      xprice: "N.P : RM 25.99",
      price: "RM 20.00",
    },
    {
      img: Images.wood,
      label: "Designer Dark Brown Oak Wooden Chair",
      seller: "Indonesia Seller",
      rating: 3,
      xprice: "N.P : RM 25.99",
      price: "RM 20.00",
    },
    {
      img: Images.wood,
      label: "Designer Dark Brown Oak Wooden Chair",
      seller: "Indonesia Seller",
      rating: 5,
      xprice: "N.P : RM 25.99",
      price: "RM 20.00",
    },
    {
      img: Images.wood,
      label: "Designer Dark Brown Oak Wooden Chair",
      seller: "Indonesia Seller",
      rating: 5,
      xprice: "N.P : RM 25.99",
      price: "RM 20.00",
    },
    {
      img: Images.wood,
      label: "Designer Dark Brown Oak Wooden Chair",
      seller: "Indonesia Seller",
      rating: 5,
      xprice: "N.P : RM 25.99",
      price: "RM 20.00",
    },
    {
      img: Images.wood,
      label: "Designer Dark Brown Oak Wooden Chair",
      seller: "Indonesia Seller",
      rating: 3,
      xprice: "N.P : RM 25.99",
      price: "RM 20.00",
    },
    {
      img: Images.wood,
      label: "Designer Dark Brown Oak Wooden Chair",
      seller: "Indonesia Seller",
      rating: 3,
      xprice: "N.P : RM 25.99",
      price: "RM 20.00",
    },
    {
      img: Images.wood,
      label: "Designer Dark Brown Oak Wooden Chair",
      seller: "Indonesia Seller",
      rating: 5,
      xprice: "N.P : RM 25.99",
      price: "RM 20.00",
    },
    {
      img: Images.wood,
      label: "Designer Dark Brown Oak Wooden Chair",
      seller: "Indonesia Seller",
      rating: 5,
      xprice: "N.P : RM 25.99",
      price: "RM 20.00",
    },
    {
      img: Images.wood,
      label: "Designer Dark Brown Oak Wooden Chair",
      seller: "Indonesia Seller",
      rating: 5,
      xprice: "N.P : RM 25.99",
      price: "RM 20.00",
    },
    {
      img: Images.wood,
      label: "Designer Dark Brown Oak Wooden Chair",
      seller: "Indonesia Seller",
      rating: 3,
      xprice: "N.P : RM 25.99",
      price: "RM 20.00",
    },
    {
      img: Images.wood,
      label: "Designer Dark Brown Oak Wooden Chair",
      seller: "Indonesia Seller",
      rating: 3,
      xprice: "N.P : RM 25.99",
      price: "RM 20.00",
    },
  ];

  return (
    <Container>
      <div className="row all_products">
        {newArrival?.map((item, key) => (
          <div
            className="card_prdc col-lg-3 col-md-3 col-sm-4 col-xs-4 mb-4 mt-1"
            key={key}
          >
            <div className="row card_dvd">
              <Link to="/productdetails" style={{ textDecoration: "none" }}>
                <div className="img_prdc">
                  <img src={item?.img} alt="" />
                </div>
                <div className="col">
                  <div className="prdc_details">
                    <div className="details_head mx-2 pt-1">{item?.label}</div>
                    <div className="dtls_seller col-xs-12 col-md-8 col-xl-8 col-sm-8 mx-2 mt-1">
                      {item?.seller}
                    </div>
                    <div className="mn_prc mx-2 mt-1">{item.xprice}</div>
                    <div className="prdc_prc mx-2 mt-1">{item?.price}</div>
                    <div className="card_ftr mt-2 mb-2">
                      <button className="cart_cntns mx-1">
                        <div className="cart_img">
                          <img src={Images?.cart_1} alt="" />
                        </div>
                        <div className="cart_msg p">Add To Cart</div>
                      </button>

                      <div className="btn_sec col-5">
                        <button className="p mx-1">Buy Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ProductsCardsAL;
