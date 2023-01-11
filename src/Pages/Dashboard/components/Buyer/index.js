import React, { useState } from "react";
import "./index.scss";
import Navbar from "../../Navbar/Navbar";
import Chat from "./components/Chat/Chat";
import Follow from "./components/Follow/Follow";
import LoyaltyPoints from "./components/LoyaltyPoints/LoyaltyPoints";
import MyAccount from "./components/MyAccount/MyAccount";
import MyOrder from "./components/MyOrder/MyOrder";
import Notification from "./components/Notification/Notification";
import RequestQuotes from "./components/RequestQuotes/RequestQuotes";
import Security from "./components/Security/Security";
import SideBar from "./components/SideBar";

const Index = () => {
  const [currentTab, setCurrentTab] = useState("MyAccount");

  const TabChange = ({ tab }) => {
    const tabs = {
      MyAccount: <MyAccount />,
      Security: <Security />,
      MyOrder: <MyOrder />,
      RequestQuotes: <RequestQuotes />,
      Chat: <Chat />,
      Follow: <Follow />,
      Notification: <Notification />,
      LoyalityPoints: <LoyaltyPoints />,
    };
    return tabs[tab];
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="buyer_dashboard">
          <div className="row">
            <div className="col-lg-3">
              <SideBar setCurrentTab={setCurrentTab} />
            </div>
            <div className="col-lg-9">
              <TabChange tab={currentTab} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
