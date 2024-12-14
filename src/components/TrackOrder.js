import React from 'react';
import { useSelector } from 'react-redux';
import { Typography } from '@mui/material';

const TrackOrder = () => {
  const { status, orderId } = useSelector((state) => state.orders);

  return (
    <div>
      <Typography variant="h6">Order ID: {orderId || 'Not Available'}</Typography>
      <Typography>Status: {status}</Typography>
    </div>
  );
};

export default TrackOrder;
