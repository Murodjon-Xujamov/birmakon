import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Sidebar,
  ContainerSidebar,
  SidebarNav,
  SidebarTitle,
  SidebarElement,
  SidebarNavItems,
  SidebarIcons,
  SidebarNavTitle,
} from "../elements/_container";
import "../../assets/scss/_container.scss";
import { ImExit } from "react-icons/im";
import { useHistory } from "react-router-dom";
import _nav from "./_nav";

const TheSidebar = () => {
  const show = useSelector((state) => state.user.sidebarShow);

  const profile = useSelector((state) => state.profileClient.profileClient);

  const [activeItemNav, setActiveItemNav] = useState("");

  const history = useHistory();

  const handleLogout = () => {
    window.localStorage.removeItem("@token");
    history.push("/dashboard");
    window.location.reload();
  };

  return (
    <Sidebar show={show} className="_sidebar">
      <SidebarNav>
        <SidebarTitle style={{ fontFamily: "monospace" }}>
          {profile.name}
        </SidebarTitle>
      </SidebarNav>
      <ContainerSidebar>
        {_nav.map((nav, idx) => (
          <div key={idx}>
            {nav._tag === "SidebarNavItem" ? (
              <SidebarNavItems
                className={`sidebar_nav_items ${
                  nav.navName === activeItemNav ? "activeNav" : ""
                }`}
                to={nav.to}
                onClick={() => {
                  setActiveItemNav(nav.navName);
                }}
                style={{ textDecoration: "none" }}
              >
                <SidebarElement>
                  <SidebarIcons>{nav.icon}</SidebarIcons>
                  <SidebarTitle>{nav.name}</SidebarTitle>
                </SidebarElement>
              </SidebarNavItems>
            ) : (
              <SidebarNavTitle>{nav.name}</SidebarNavTitle>
            )}
          </div>
        ))}
        <div
          className="exitButton"
          style={{
            display: "flex",
            alignItems: "center",
            marginLeft: "25px",
            marginTop: "-20px",
            cursor: "pointer",
          }}
        >
          <ImExit onClick={handleLogout} color="white" size={20} />
          <p style={{ color: "white", marginLeft: "17px" }}>Exit</p>
        </div>
      </ContainerSidebar>
    </Sidebar>
  );
};

export default TheSidebar;
