import React from 'react';
import { SideMenu, Carousel, ProductCollection, BusinessPartners, Header, Footer } from '../../components';
import { Row, Col, Typography } from 'antd';
import { productList1, productList2, productList3 } from './mockups'
import styles from './HomePage.module.css'

import sideImage1 from '../../assets/images/sider_2019_12-09.png';
import sideImage2 from '../../assets/images/sider_2019_02-04.png';
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png';

import { companies } from '../../assets'

import { withTranslation, WithTranslation } from 'react-i18next'

class HomePageComponent extends React.Component<WithTranslation> {
  render() {
    const { t } = this.props
    return <>
      <Header></Header>
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
          title={<Typography.Title level={3} type='warning'>{t('home_page.hot_recommended')}</Typography.Title>}
          sideImage={sideImage1}
          product={productList1}
        />
        <ProductCollection
          title={<Typography.Title level={3} type='danger'>{t('home_page.new_arrival')}</Typography.Title>}
          sideImage={sideImage2}
          product={productList2}
        />
        <ProductCollection
          title={<Typography.Title level={3} type='success'>{t('home_page.domestic_travel')}</Typography.Title>}
          sideImage={sideImage3}
          product={productList3}
        />
        <BusinessPartners companies={companies} />
      </div>
      <Footer></Footer>
    </>
  }
}
// withTranslation 是高阶组件的高阶组件
export const HomePage = withTranslation()(HomePageComponent);