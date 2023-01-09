import React from "react";
import "./BuyerDashboard.scss";
import DashboardHeader from "../DashboardHeader/DashboardHeader";

const BuyerDashboard = () => {
  return (
    <>
      <DashboardHeader />
      <div className="container">
        <div className="buyer_dashboard">
          <div className="row">
            <div className="col-lg-3">
              <div className="dashboard_list">
                <div>My Account</div>
                <div>Security</div>
                <div>My Order</div>
                <div>Request for Quotes</div>
                <div>Chat</div>
                <div>Follow</div>
                <div>Notification</div>
                <div>Loyalty Points</div>
                <div>Logout</div>
              </div>
            </div>
            <div className="col-lg-9"> Profile </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BuyerDashboard;
