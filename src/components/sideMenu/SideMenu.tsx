import React from "react";
import styles from './SideMenu.module.css';
import { sideMenuList } from './mockup';
import { Menu } from "antd";
import { GifOutlined } from '@ant-design/icons';

export const SideMenu: React.FC = () => {
  return (
    <Menu mode='vertical' className={styles["side-menu"]}>
      {sideMenuList.map((m, index) => (
        <Menu.SubMenu key={`side-menu-${index}`} title={<span><GifOutlined />{m.title}</span>}>
          {m.subMenu.map((sm, index) => (
            <Menu.SubMenu key={`sub-side-menu-${index}`} title={<span><GifOutlined />{sm.title}</span>}>
              {sm.subMenu.map((ssm, index) => (
                <Menu.Item key={`side-menu-item-${index}`}><span><GifOutlined />{ssm}</span></Menu.Item>
              ))}
            </Menu.SubMenu>
          ))}
        </Menu.SubMenu>
      ))}
    </Menu>
  )
}