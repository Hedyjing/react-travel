import React from "react";
import { Image, Typography } from 'antd'
import { useParams, useHistory, useLocation, useRouteMatch} from 'react-router-dom'

interface ProductImageProps {
  id: string | number;
  size: 'large' | 'small';
  title: string;
  imageSrc: string;
  price: string | number;
}

export const ProductImage: React.FC<ProductImageProps> = ({ id, size, title, imageSrc, price }) => {
  // const param = useParams();
  // const location = useLocation();
  const history = useHistory();
  // const match = useRouteMatch();

  return <div onClick={() => history.push(`detail/${id}`)}>
    {size === 'large' ?
      <Image src={imageSrc} height={285} width={490} /> :
      <Image src={imageSrc} height={120} width={240} />
    }
    <div>
      <Typography.Text type="secondary">{title.slice(0, 25)}</Typography.Text>
      <Typography.Text type='danger' strong>{price}</Typography.Text>
    </div>
  </div>
}