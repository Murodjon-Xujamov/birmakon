import React from "react";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { GiBuyCard, GiGymBag } from "react-icons/gi";
import { VscSymbolOperator } from "react-icons/vsc";
import { BsQuestionSquareFill } from "react-icons/bs";
import { IoMdAnalytics } from "react-icons/io";

import { AiFillSetting, AiFillQuestionCircle } from "react-icons/ai";

const _nav = [
  {
    _tag: "SidebarNavTitle",
    name: "Профиль",
    to: "",
    icon: "",
  },
  {
    _tag: "SidebarNavItem",
    name: "Мой профил",
    to: "/user-setting",
    icon: <FaUserAlt />,
    navName: "nav1",
  },
  {
    _tag: "SidebarNavTitle",
    name: "Mои товары",
    to: "",
    icon: "",
  },
  {
    _tag: "SidebarNavItem",
    name: "Заказы",
    to: "/product/create",
    icon: <GiBuyCard />,
    navName: "nav2",
  },
  {
    _tag: "SidebarNavItem",
    name: "Товары",
    to: "/product",
    icon: <GiGymBag />,
    navName: "nav3",
  },
  {
    _tag: "SidebarNavItem",
    name: "Сообщения",
    to: "/product/setting-discount",
    icon: <VscSymbolOperator />,
    navName: "nav4",
  },
  {
    _tag: "SidebarNavItem",
    name: "Отзывы",
    to: "/comment/notion",
    icon: <BsQuestionSquareFill />,
    navName: "nav5",
  },
  {
    _tag: "SidebarNavItem",
    name: "Аналитика",
    to: "/product/blocking-of-goods",
    icon: <IoMdAnalytics />,
    navName: "nav6",
  },
  {
    _tag: "SidebarNavTitle",
    name: "Информация",
    to: "",
    icon: "",
  },
  {
    _tag: "SidebarNavItem",
    name: "Бренды",
    to: "/product/factories",
    icon: <FaShoppingCart />,
    navName: "nav7",
  },
  {
    _tag: "SidebarNavItem",
    name: "Поддержка",
    to: "/support",
    icon: <AiFillSetting />,
    navName: "nav11",
  },
  {
    _tag: "SidebarNavItem",
    name: "Инструкции",
    to: "/user-setting",
    icon: <AiFillQuestionCircle />,
    navName: "nav13",
  },
];

export default _nav;
