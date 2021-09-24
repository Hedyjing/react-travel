import { Col, Divider, Row, Typography } from "antd";
import React from "react";
import styles from './BusinessPartners.module.css'


export const BusinessPartners: React.FC<{companies: string[]}> = ({companies}) => {
  return <div className={styles.content}>
    <Divider orientation='left'>
      <Typography.Title level={3}>合作企业</Typography.Title>
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