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
          xprice: "N.P : RM 95.00",
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
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          {shopName.map((list, key) => (
            <>
              <div className="mt-4">
                <input type="checkbox" /> {list.head}
              </div>
              <tbody>
                {list.cartData.map((item) => (
                  <>
                    <tr key={key}>
                      <td className="col-xl-4 col-lg-4">
                        <div className="product_det_img">
                          <div className=" product_det">
                            <input type="checkbox" />
                            <div className="cart_imgs">
                              <img src={item?.img} />
                            </div>
                          </div>
                          <div className="">
                            <div> {item?.label} </div>
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
                  </>
                ))}
                {/* <hr /> */}
              </tbody>
            </>
          ))}
        </Table>
      </div>
    </>
  );
};

export default Cart;
