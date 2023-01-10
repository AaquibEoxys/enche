import React, { useState } from "react";
import "./SideBar.scss";

const SideBar = ({ setCurrentTab }) => {
  const [profileDetails, setProfileDetails] = useState(false);

  return (
    <div className="dashboard_list">
      <div onClick={() => setCurrentTab("MyAccount")}>
        <div onClick={() => setProfileDetails(!profileDetails)}>My Account</div>
        {profileDetails ? (
          <>
            <div className="profile_details">
              <div
                className="profile"
                onClick={() => setCurrentTab("MyAccount")}
              >
                Profile
              </div>
              <div className="profile">Address</div>
            </div>
          </>
        ) : null}
      </div>
      <div onClick={() => setCurrentTab("Security")}>Security</div>
      <div onClick={() => setCurrentTab("MyOrder")}>My Order</div>
      <div onClick={() => setCurrentTab("RequestQuotes")}>
        Request for Quotes
      </div>
      <div onClick={() => setCurrentTab("Chat")}>Chat</div>
      <div onClick={() => setCurrentTab("Follow")}>Follow</div>
      <div onClick={() => setCurrentTab("Notification")}>Notification</div>
      <div onClick={() => setCurrentTab("LoyalityPoints")}>Loyalty Points</div>
      <div>Logout</div>
    </div>
  );
};

export default SideBar;
