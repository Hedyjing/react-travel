import React from 'react';
import styles from './App.module.css';
import { Header, Footer, SideMenu, Carousel, ProductCollection } from './components';
import { Row, Col, Typography } from 'antd';
import { productList1, productList2, productList3 } from './mockups'

import sideImage1 from './assets/images/sider_2019_12-09.png';
import sideImage2 from './assets/images/sider_2019_02-04.png';
import sideImage3 from './assets/images/sider_2019_02-04-2.png';

function App() {
  return (
    <div className={styles.App}>
      <Header></Header>
      {/* 页面内容content */}
      <div className={styles['page-content']}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
        <ProductCollection
          title={<Typography.Title level={3} type='warning'>爆款推荐</Typography.Title>}
          sideImage={sideImage1}
          product={productList1}
        />
        <ProductCollection
          title={<Typography.Title level={3} type='danger'>新品上市</Typography.Title>}
          sideImage={sideImage2}
          product={productList2}
        />
        <ProductCollection
          title={<Typography.Title level={3} type='success'>国内游推荐</Typography.Title>}
          sideImage={sideImage3}
          product={productList3}
        />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
