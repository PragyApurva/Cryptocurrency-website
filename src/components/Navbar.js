import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link , Router,NavLink} from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import { Route } from "react-router";

import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  return (
    <div className='nav-container'>
         <div className='logo-container'>
             <Avatar src ={icon} sizess="large" />
             <Typography.Title level={2} className="logo">

                 <NavLink to="/">Cryptoverse</NavLink>
             </Typography.Title>

            {/* use in mobile for switching */}
            {/* <Button className='menuControlContainer'></Button>*/}
        </div>
        <Menu theme='dark'>
          <Menu.Item icon={<HomeOutlined/>}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined/>}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined/>}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined/>}>
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>

    </div>
  );
};
export default Navbar;
