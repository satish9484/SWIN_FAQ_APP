import { Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";

import { studentSidebarItems } from "../../../constants/SidebarItems";
import { toAbsoluteUrl } from "../../../utils";
import { LayoutCollapsed, LayoutUnCollapsed } from "../../../svg";

const Sidebar = () => {
  const { Sider } = Layout;
  const [current, setCurrent] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(studentSidebarItems);
  }, []);

  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Sider
      collapsible
      width="270px"
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      trigger={collapsed ? <LayoutUnCollapsed /> : <LayoutCollapsed />}
      reverseArrow={true}
      breakpoint="md"
    >
      <figure className="layout-logo">
        <p className="logo">BRIGHT BOOST</p>
        <img
          className="logo-icon"
          src={toAbsoluteUrl("/images/logo-icon.svg")}
          alt="logo"
        />
      </figure>
      <Menu
        mode="inline"
        onClick={onClick}
        selectedKeys={[current]}
        items={items}
        theme="dark"
      />
    </Sider>
  );
};

export default Sidebar;
