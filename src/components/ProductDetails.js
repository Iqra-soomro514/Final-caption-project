import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProduct } from './redux/productSlice';
import { Card, CardContent, Typography } from '@mui/material';

const ProductDetails = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.product);

  useEffect(() => {
    const mockProduct = { name: 'Product A', price: '$50', description: 'Sample Product Description' };
    dispatch(setProduct(mockProduct));
  }, [dispatch]);

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{product.name}</Typography>
        <Typography variant="body1">{product.price}</Typography>
        <Typography variant="body2">{product.description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
