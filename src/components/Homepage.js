import React from 'react'
import millify from 'millify';
import {Typography,Row,Col,Statistic} from 'antd'
import {Link} from 'react-router-dom'

import { useGetCryptosQuery } from '../services/cryptoApi';
// This means that from now on assume that Title is in Typography
const {Title} =Typography;

const Homepage = () => {
   const { data, isFetching } = useGetCryptosQuery(10);
   console.log(data);

  return (
    <>
      <Title level={2} className="heading"> Global Crypto Stats</Title>
      <Row>
        {/* In antd total screen width is 24 so this is taking half of the total width */}
        <Col span={12}><Statistic title="Total cryptocurrencies" value="5"/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value="5"/></Col>
        <Col span={12}><Statistic title="Total Market cap" value="5"/></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value="5"/></Col>
        <Col span={12}><Statistic title="Total markets" value="5"/></Col>

        {/* Current values are just place holders we will put real values after some time */}
      </Row>
    </>

  )
}

export default Homepage