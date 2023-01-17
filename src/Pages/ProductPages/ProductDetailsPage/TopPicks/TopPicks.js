import React from "react";
import "./TopPicks.scss";
import Images from "../../../../components/Images/Images";
import { Container } from "react-bootstrap";

const TopPicks = () => {
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
      rating: 5,
      xprice: "N.P : RM 25.99",
      price: "RM 20.00",
    },
  ];
  return (
    <Container>
      <div className="toppicks row mt-4">
        <div className="tpc_head h5  mt-4 mb-3">Top Picks From Shop</div>
        {newArrival?.map((item, key) => (
          <div
            className="card_prdc col-lg-2 col-md-2 col-sm-4 col-xs-4 mb-4 mt-1"
            key={key}
          >
            <div className="row card_dvd">
              <div className=" img_prdc">
                <img src={item?.img} alt="" />
              </div>
              <div className="col">
                <div className="prdc_details">
                  <div className="details_head mx-2">{item?.label}</div>
                  <div className="dtls_seller col-xs-12 col-md-8 col-xl-8 col-sm-8 mx-2">
                    {item?.seller}
                  </div>
                  <div className="prdc_prc mx-2">{item?.price}</div>
                  <div className="card_ftr row m-1">
                    <div className="cart_cntns col-6">
                      <div className="cart_img">
                        <img src={Images?.cart_1} alt="" />
                      </div>
                      <div className="cart_msg p">Add To Cart</div>
                    </div>

                    <div className="btn_sec col-4">
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

export default TopPicks;
