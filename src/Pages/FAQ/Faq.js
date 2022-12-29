import React from "react";
import "./Faq.scss";
import Dropdown from "react-bootstrap/Dropdown";
const Faq = () => {
  return (
    <div className="container">
      <div className="first-div-faq">
        <h3 className="heading">FAQ</h3>
        <h5 className="faq-head">Customer service management</h5>
        <div>
          <h5 className="frequ-ask">Frequently Ask Qustion from Buyer</h5>
          <div>
            <Dropdown>
              <Dropdown.Toggle>can i cancel my order?</Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item>
                  Yes you can However, cancellation is only allowed if the
                  payment had not confirmed you may contact our contact center
                  to <br />
                  cancel the order.
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle className="dropdown-toggle2">
                How to buy many products at a time?
              </Dropdown.Toggle>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle className="dropdown-toggle3">
                Refund policy for customer
              </Dropdown.Toggle>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle className="dropdown-toggle4">
                Exchange policy for customer
              </Dropdown.Toggle>
            </Dropdown>
            <Dropdown>
              <Dropdown.Toggle className="dropdown-toggle5">
                Give a way products available
              </Dropdown.Toggle>
            </Dropdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
