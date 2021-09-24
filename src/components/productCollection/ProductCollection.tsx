import React from "react";
import styles from './ProductCollection.module.css'
import { Row, Col, Divider } from 'antd';
import { ProductImage } from './ProductImage'

interface ProductProps {
  title: JSX.Element;
  sideImage: string;
  product: any[]
}


export const ProductCollection: React.FC<ProductProps> = ({ title, sideImage, product }) => {
  return <div className={styles.content}>
    <Divider orientation="left">{title}</Divider>
    <Row>
      <Col span={4}>
        <img src={sideImage} alt="" className={styles["side-image"]} />
      </Col>
      <Col span={20}>
        <Row>
          <Col span={12}>
            <ProductImage
              id={product[0].id}
              size={'large'}
              title={product[0].title}
              imageSrc={product[0].touristRoutePictures[0].url}
              price={product[0].price}
            />
          </Col>
          <Col span={12}>
            <Row>
              <Col span={12}>
                <ProductImage
                  id={product[1].id}
                  size={'small'}
                  title={product[1].title}
                  imageSrc={product[1].touristRoutePictures[0].url}
                  price={product[1].price}
                />
              </Col>
              <Col span={12}>
                <ProductImage
                  id={product[2].id}
                  size={'small'}
                  title={product[2].title}
                  imageSrc={product[2].touristRoutePictures[0].url}
                  price={product[2].price}
                />
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <ProductImage
                  id={product[3].id}
                  size={'small'}
                  title={product[3].title}
                  imageSrc={product[3].touristRoutePictures[0].url}
                  price={product[3].price}
                />
              </Col>
              <Col span={12}>
                <ProductImage
                  id={product[4].id}
                  size={'small'}
                  title={product[4].title}
                  imageSrc={product[4].touristRoutePictures[0].url}
                  price={product[4].price}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <ProductImage
              id={product[5].id}
              size={'small'}
              title={product[5].title}
              imageSrc={product[5].touristRoutePictures[0].url}
              price={product[5].price}
            />
          </Col>
          <Col span={6}>
            <ProductImage
              id={product[6].id}
              size={'small'}
              title={product[6].title}
              imageSrc={product[6].touristRoutePictures[0].url}
              price={product[6].price}
            />
          </Col>
          <Col span={6}>
            <ProductImage
              id={product[7].id}
              size={'small'}
              title={product[7].title}
              imageSrc={product[7].touristRoutePictures[0].url}
              price={product[7].price}
            />
          </Col>
          <Col span={6}>
            <ProductImage
              id={product[8].id}
              size={'small'}
              title={product[8].title}
              imageSrc={product[8].touristRoutePictures[0].url}
              price={product[8].price}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
}