import React from "react";
import "./SuperAdmin.css";
const SuperAdmin = () => {
  return (
    <div>
      <div className="header">
        <h1 className="companyTitle">Company Name</h1>
        <div className="logout-button-container">
          <div className="logout-button-background">
            <h1 className="logout-button-text">Log out</h1>
          </div>
        </div>
      </div>
      <div className="admin-parent">
        <div className="super-admin-detials">
          <div className="super-admin-profile">
            <img
              src="./images/super-admin-profile.png"
              className="super-admin-profile-pic"
              alt="profile_pic"
            ></img>
            <div className="super-admin-del-container">
              <div className="super-admin-det-lables">
                <p>Full Name</p>
                <p>EMP ID</p>
                <p>DOB</p>
                <p>Role</p>
              </div>
              <div className="super-admin-det-columns">
                <p>:</p>
                <p>:</p>
                <p>:</p>
                <p>:</p>
              </div>
              <div className="super-admin-det-values">
                <p>Super Admin</p>
                <p>123227724</p>
                <p>10/11/1998</p>
                <p>Super Admin</p>
              </div>
            </div>
          </div>
          <div className="super-admin-company-details">
            <div className="super-admin-company-details-pairs">
              <p className="super-admin-company-details-lable">Company Name</p>
              <p className="super-admin-company-details-value">
                Dhenusya Infotech PVT LTD
              </p>

              <p className="super-admin-company-details-lable">Company Type</p>
              <p className="super-admin-company-details-value">IT Industry</p>
              <p className="super-admin-company-details-lable">Country</p>
              <p className="super-admin-company-details-value">India</p>
              <p className="super-admin-company-details-lable">City</p>
              <p className="super-admin-company-details-value">Visakhapatnam</p>
              <p className="super-admin-company-details-lable">Staff</p>
              <p className="super-admin-company-details-value">50-100</p>
            </div>
          </div>
        </div>
        <div className="super-admin-additions">
          <div className="super-admin-additions-header">
            <p className="super-admin-additions-header-head">Admin List</p>
            <div className="super-admin-addition-buttons">
              <button className="super-admin-addition-buttons-add-admin">
                <p className="para">Add Admin</p>
                <img
                  className="super-admin-addition-buttons-add-admin-pic"
                  src="./images/add.png"
                ></img>
              </button>
              <div className="super-admin-addition-search">
                <input
                  className="super-admin-addition-search-input"
                  type="text"
                />
                <div className="super-admin-addition-search-input-style-container">
                  <img
                    className="super-admin-addition-search-input-img"
                    src="./images/search-icon.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperAdmin;
