import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { COLORS } from "./_variables";

export const Header = styled.header`
  background: ${COLORS.blue};
  height: 50px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1029;
  justify-content: space-between;
`;

export const Sidebar = styled.header`
  background: ${COLORS.blue};
  transition: 0.2s linear;
  width: 300px;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 1030;
  @media (max-width: 992px) {
    margin-left: -300px;
    transition: 0.2s linear;
  }
`;

export const SidebarBrand = styled(NavLink)``;

export const HeaderBrand = styled.header``;

export const SidebarNav = styled.div`
  color: ${COLORS.white};
  background: ${COLORS.blueLinear};
  widht: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const SidebarNavTitle = styled.div`
  color: ${COLORS.white};
  widht: 100%;
  height: 40px;
  display: flex;
  font-size: 14px;
  margin-left: 20px;
  align-items: center;
`;

export const SidebarNavItems = styled(NavLink)`
  color: ${COLORS.white};
  widht: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: ${COLORS.blueLinearHover};
  }
`;

export const SidebarTitle = styled.header`
  margin-left: 20px;
  font-size: 15px;
`;

export const SidebarElement = styled.header`
  margin-left: 20px;
  display: flex;
  align-items: center;
  font-size: 15px;
`;

export const SidebarIcons = styled.header`
  font-size: 20px;
`;

export const ContainerSidebar = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;
  height: 80vh;
`;

export const Container = styled.div`
  width: 96%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 98%;
  }
`;
