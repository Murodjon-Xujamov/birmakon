import React from "react";
import { TheContent, TheSidebar, TheHeader } from "./index";
import "../../assets/scss/_container.scss";
import Auth from "../pages/auth/auth";
const token = window.localStorage.getItem("@token");

const TheLayout = () => {
  return (
    <>
      {token ? (
        <div className="default_layout_row">
          <TheSidebar />
          <div className="wrapper_column">
            <TheHeader />
            <div className="body_content">
              <TheContent />
            </div>
          </div>
        </div>
      ) : (
        <Auth />
      )}
    </>
  );
};

export default TheLayout;
