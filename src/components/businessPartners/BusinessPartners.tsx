import { Col, Divider, Row, Typography } from "antd";
import React from "react";
import styles from './BusinessPartners.module.css'
import { useTranslation } from 'react-i18next'


export const BusinessPartners: React.FC<{companies: string[]}> = ({companies}) => {
  const { t } = useTranslation();
  return <div className={styles.content}>
    <Divider orientation='left'>
      <Typography.Title level={3}>{t('home_page.joint_venture')}</Typography.Title>
    </Divider>
    <Row>
      {companies.map(i => <Col span={6}>
        <img src={i} alt="" style={{
                width: "80%",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}/>
      </Col>)}
    </Row>
  </div>
}