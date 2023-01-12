import React from "react";
import "./ProductsCardsAL.scss";
import Images from "../../../components/Images/Images";
import { Container } from "react-bootstrap";

const ProductsCardsAL = () => {
  const newArrival = [
    {
      img: Images.wood,
      label: "Gold-laced Black Leather [Size 22cm]",
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
  ];

  return (
    <Container>
      <div className="row all_products">
        {newArrival?.map((item, key) => (
          <div
            className="card_prdc col-lg-3 col-md-3 col-sm-6 col-xs-6 mb-4"
            key={key}
          >
            <div className="row card_dvd">
              <div className=" col-xs-12 img_prdc">
                <img src={item?.img} alt="" />
              </div>
              <div className="col">
                <div className="prdc_details">
                  <div className="details_head fw-bold mx-2  col-xs-12">
                    {item?.label}
                  </div>
                  <div className=" col-xs-12 col-md-6 col-lg-6 dtls_seller mx-2 h4">
                    {item?.seller}
                  </div>
                  <div className="prdc_prc mx-2 p">{item?.price}</div>
                  <div className="card_ftr mx-2 mb-2 p">
                    <div className="cart_cntns">
                      <div className="cart_img">
                        <img src={Images?.cart_1} alt="" />
                      </div>
                      <div className="cart_msg fw-bold p">Add To Cart</div>
                    </div>

                    <div className="btn_sec mx-2">
                      <button className="btn p">BuyNow</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row all_products">
        {newArrival?.map((item, key) => (
          <div
            className="card_prdc col-lg-3 col-md-3 col-sm-6 col-xs-6 mb-4"
            key={key}
          >
            <div className="row card_dvd ">
              <div className=" img_prdc">
                <img src={item?.img} alt="" />
              </div>
              <div className="col">
                <div className="prdc_details">
                  <div className="details_head fw-bold mx-2">{item?.label}</div>
                  <div className="dtls_seller mx-2">{item?.seller}</div>
                  <div className="prdc_prc mx-2">{item?.price}</div>
                  <div className="card_ftr mx-2 mb-2">
                    <div className="cart_cntns ">
                      <div className="cart_img">
                        <img src={Images?.cart_1} alt="" />
                      </div>
                      <div className="cart_msg fw-bold p">Add To Cart</div>
                    </div>

                    <div className="btn_sec mx-2">
                      <button className="btn p">BuyNow</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row all_products">
        {newArrival?.map((item, key) => (
          <div
            className="card_prdc col-lg-3 col-md-3 col-sm-6 col-xs-6 mb-4"
            key={key}
          >
            <div className="row card_dvd">
              <div className=" img_prdc">
                <img src={item?.img} alt="" />
              </div>
              <div className="col">
                <div className="prdc_details">
                  <div className="details_head fw-bold mx-2">{item?.label}</div>
                  <div className="dtls_seller mx-2">{item?.seller}</div>
                  <div className="prdc_prc mx-2">{item?.price}</div>
                  <div className="card_ftr mx-2 mb-2">
                    <div className="cart_cntns ">
                      <div className="cart_img">
                        <img src={Images?.cart_1} alt="" />
                      </div>
                      <div className="cart_msg fw-bold p">Add To Cart</div>
                    </div>

                    <div className="btn_sec mx-2">
                      <button className="btn p">BuyNow</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ProductsCardsAL;
