import React from "react";
import SubHeader from "../../components/subHead/SubHeader";
import Table from "react-bootstrap/Table";
import "./Cart.scss";
import Images from "../../components/Images/Images";
import QuantityIncrementDecrement from "../../components/QuantityIncrementDecrement/QuantityIncrementDecrement";

const Cart = () => {
  const shopName = [
    {
      head: "Bayu Kelutut",
      cartData: [
        {
          img: Images.bottle,
          label:
            "Bayu kelulut honey Premium Rainforest Stingless Bee Honey (1kg)",
          xprice: "RM 240.00",
          price: "RM 230.00",
          total_price: "RM 230.00",
        },
        {
          img: Images.bottle2,
          label: "Bayu kelulut honey (350g)",
          xprice: "RM 95.00",
          price: "RM 90.00",
          total_price: "RM 90.00",
        },
        {
          img: Images.bottle3,
          label: "Bayu kelulut  Multifloral Sachet (285g)   ",
          xprice: "RM 95.00",
          price: "RM 90.00",
          total_price: "RM 90.00",
        },
      ],
    },
    {
      head: "Balance Life",
      cartData: [
        {
          img: Images.bottle,
          label:
            "Bayu kelulut honey Premium Rainforest Stingless Bee Honey (1kg)",
          xprice: "RM 240.00",
          price: "RM 230.00",
          total_price: "RM 230.00",
        },
        {
          img: Images.bottle2,
          label:
            "Bayu kelulut honey Premium Rainforest Stingless Bee Honey (1kg)",
          xprice: "RM 95.00",
          price: "RM 90.00",
          total_price: "RM 90.00",
        },
      ],
    },
  ];

  return (
    <>
      <SubHeader />
      <div className="container">
        <Table responsive="sm" className="table table-borderless mt-3">
          <thead className="thead_div">
            <tr>
              <th className="product_checkbox">
                <input type="checkbox" />
                <div>Products</div>
              </th>
              <th className="heading_center">Unit Price</th>
              <th className="heading_center">Quantity</th>
              <th className="heading_center">Total Price</th>
              <th className="heading_center">Action</th>
            </tr>
          </thead>
          {shopName.map((list, key) => (
            <React.Fragment key={key}>
              <div className="mt-4" key={key}>
                <div className="table_shop_head">
                  <div className="check_shop">
                    <input
                      className="check_color"
                      type="checkbox"
                      value="checked"
                    />
                    <div className="shop_name">{list.head}</div>
                  </div>
                  <div className="chat_logo">
                    <img src={Images.chat_icon} alt="" /> <span>CHAT</span>
                  </div>
                  <div className="shop_logo">
                    <img src={Images.viewShop} alt="" /> <span>VIEW SHOP</span>
                  </div>
                </div>
              </div>
              <tbody className="test">
                {list.cartData.map((item, key) => (
                  <React.Fragment key={key}>
                    <tr className="row_space">
                      <td className="col-xl-4 col-lg-4">
                        <div className="product_det_img mt-2">
                          <div className=" product_det">
                            <input type="checkbox" />
                            <div className="cart_imgs">
                              <img src={item?.img} />
                            </div>
                          </div>
                          <div className="">
                            <div className="item_name"> {item?.label} </div>
                          </div>
                        </div>
                      </td>
                      <td className="unit_price col-xl-2 col-lg-2 ">
                        <div className="cross_price">{item?.xprice}</div>
                        <div className="actual_price">{item?.price}</div>
                      </td>
                      <td>
                        <QuantityIncrementDecrement />
                      </td>
                      <td className="total_price">{item?.total_price}</td>
                      <td className="delete_item">Delete</td>
                    </tr>
                  </React.Fragment>
                ))}
              </tbody>
            </React.Fragment>
          ))}
        </Table>
        <div className="total_cart">
          <div className="total_check">
            <input type="checkbox" />
            <span>Selected all (5)</span>
          </div>
          <div>Delete</div>
          <div className="move_likes">Move To My Likes</div>
          <div className="total_price_div">
            Total(5 items): <span> RM680.00 </span>
          </div>
          <div className="checkout_btn_div">
            <button className="checkout_btn"> Check Out </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
