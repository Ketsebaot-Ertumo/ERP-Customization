"use client";

import React, { useState } from 'react';
import { HomeOutlined, MenuOutlined, FolderOutlined, FolderOpenOutlined, HomeFilled } from '@ant-design/icons';
import { Menu } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
import Link from "next/link";


export default function Sidebar() {

    // const { SubMenu } = Menu;

    return (
      <>
        {/* <div className="h-screen fixed top-0 left-0 bg-gray-800 dark:bg-gray-900 text-white">
            <div className="flex gap-4 py-4 px-5 "> 
                <HomeFilled className='opacity-80'/>
                <p style={{letterSpacing: "0.5px" }} className={`text-[24px] m-0 overflow-hidden text-ellipsis whitespace-nowrap font-bold`}>
                    ETK
                </p>
            </div>

            <Menu
                // menuItemStyles={menuItemStyles}
                className='bg-gray-800 opacity-80  dark:bg-gray-900'
            >
                <MenuItem
                    component={<Link href="/" />}
                    icon={<HomeOutlined />}
                    className='text-white hover:bg-gray-700'
                >
                    {" "}
                    Dashboard
                </MenuItem>
                <MenuItem
                    component={<Link href="/hr" />}
                    icon={<FolderOpenOutlined />}
                    className='text-white hover:bg-gray-700'
                >
                    {" "}
                    Human Resource
                </MenuItem>
                <MenuItem
                    component={<Link href="/finance" />}
                    icon={<HomeOutlined />}
                    className='text-white hover:bg-gray-700'
                >
                    {" "}
                    Payroll
                </MenuItem>
                <MenuItem
                    component={<Link href="/finance" />}
                    icon={<HomeOutlined />}
                    className='text-white hover:bg-gray-700'
                >
                    {" "}
                    Inventory
                </MenuItem>
            </Menu>
        </div> */}
      </>
    );
  }
  






// import React, { useState } from 'react';
// import { Menu } from 'antd';
// import {
//   HomeOutlined,
//   SettingOutlined,
//   UserOutlined,
//   AppstoreOutlined,
// } from '@ant-design/icons';

// const { SubMenu } = Menu;

// export default function Sidebar() {
//   const [current, setCurrent] = React.useState('home');

//   const handleClick = (e) => {
//     console.log('click ', e);
//     setCurrent(e.key);
//   };

//   return (
//     <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
//       <Menu.Item key="home" icon={<HomeOutlined />}>
//         Home
//       </Menu.Item>
//       <Menu.Item key="app" icon={<AppstoreOutlined />}>
//         App
//       </Menu.Item>
//       <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Settings">
//         <Menu.ItemGroup title="Item 1">
//           <Menu.Item key="setting:1">Option 1</Menu.Item>
//           <Menu.Item key="setting:2">Option 2</Menu.Item>
//         </Menu.ItemGroup>
//         <Menu.ItemGroup title="Item 2">
//           <Menu.Item key="setting:3">Option 3</Menu.Item>
//           <Menu.Item key="setting:4">Option 4</Menu.Item>
//         </Menu.ItemGroup>
//       </SubMenu>
//       <Menu.Item key="user" icon={<UserOutlined />}>
//         User
//       </Menu.Item>
//     </Menu>
//   );
// };

