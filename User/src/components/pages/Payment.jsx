// src/components/PaymentOptions.jsx

import React, { useState } from 'react';
import {
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TextField,
  Button,
  Select,
  MenuItem,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { MDBCard, MDBContainer, MDBRow} from 'mdb-react-ui-kit';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('googlePay');
  const [upiId, setUpiId] = useState('');
  const [selectedBank, setSelectedBank] = useState('@okhdfcbank');

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleUpiIdChange = (event) => {
    setUpiId(event.target.value);
  };
  const handleBankChange = (event) => {
    setSelectedBank(event.target.value);
  };

  return (
    <section className="h-300 h-custom" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-3 h-300">
            <MDBRow className="justify-content-center align-items-center h-300 --bs-gutter-x: -8.5rem;">
            <MDBCard className="card-registration card-registration-1" style={{ borderRadius: "15px" }}>
    <Box sx={{ maxWidth: 800, margin: '0 auto', p: 4 }}>
      
      <div className="p-3 position-relative mt-n2 mx-2 z-index-2">
        <div
          className="contact py-4 pe-1"
          style={{
            backgroundImage: "linear-gradient(195deg, #ec407a, #D4B04C",
            boxShadow:
              "0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(233, 30, 99, .4)",
            borderRadius: ".5rem",
          }}
        >
          <h5
            className="text-center text-white"
            style={{ fontWeight: "bold", fontFamily: "DM Serif Display" }}
          >
            Recommended Payments Options
          </h5>
        </div>
      </div>
      
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="payment method"
          name="paymentMethod"
          value={paymentMethod}
          onChange={handlePaymentChange}
        >
          <Card variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
              <FormControlLabel
                value="googlePay"
                control={<Radio />}
                label={
                  <Box display="flex" alignItems="center">
                    <Typography>Google Pay</Typography>
                    <Box component="span" sx={{ ml: 1, color: 'green' }}>
                      1 Offer
                    </Box>
                    <PaymentIcon sx={{ ml: 'auto', color: 'grey.500' }} />
                  </Box>
                }
              />
              {paymentMethod === 'googlePay' && (
                <Box sx={{ mt: 2 }}>
                  <TextField
                    label="Enter UPI ID here"
                    variant="outlined"
                    fullWidth
                    value={upiId}
                    onChange={handleUpiIdChange}
                    sx={{ mb: 2 }}
                  />
                  <Select
                    value={selectedBank}
                    onChange={handleBankChange}
                    fullWidth
                  >
                    <MenuItem value="@okhdfcbank">@okhdfcbank</MenuItem>
                    <MenuItem value="@okicici">@okicici</MenuItem>
                    <MenuItem value="@okaxis">@okaxis</MenuItem>
                    <MenuItem value="@oksbi">@oksbi</MenuItem>
                  </Select>
                  <Typography variant="body2" color="textSecondary" sx={{ mt: 1, mb: 2 }}>
                    Cashback up to ₹250. On First RuPay Credit Card transactions of ₹500 and above. TCA
                  </Typography>
                  <Button variant="contained" color="primary" fullWidth>
                    PAY NOW
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
              <FormControlLabel
                value="cashOnDelivery"
                control={<Radio />}
                label={
                  <Box display="flex" alignItems="center">
                    <Typography>Cash on Delivery (Cash/UPI)</Typography>
                    <LocalAtmIcon sx={{ ml: 'auto', color: 'grey.500' }} />
                  </Box>
                }
              />
                {paymentMethod === 'cashOnDelivery' && (
                <Box sx={{ mt: 2 }}>
                  <Typography variant="body2" color="textSecondary" sx={{ mb: 2 }}>
                    You can pay via Cash/UPI on delivery.
                  </Typography>
                  <Button variant="contained" color="secondary" fullWidth sx={{ backgroundColor: '#ff4081' }}>
                    PLACE ORDER
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>
          <Card variant="outlined" sx={{ mb: 2 }}>
            <CardContent>
              <FormControlLabel
                value="phonePe"
                control={<Radio />}
                label={
                  <Box display="flex" alignItems="center">
                    <Typography>PhonePe</Typography>
                    <PhoneAndroidIcon sx={{ ml: 'auto', color: 'grey.500' }} />
                  </Box>
                }
              />
              {paymentMethod === 'phonePe' && (
                <Box sx={{ mt: 2 }}>
                  <Button variant="contained" color="primary" fullWidth sx={{ backgroundColor: '#ff3366' }}>
                    PAY NOW
                  </Button>
                </Box>
              )}
            </CardContent>
          </Card>
        </RadioGroup>
      </FormControl>
    </Box>
    </MDBCard>
    </MDBRow>
    </MDBContainer>
    </section>
  );
};

export default Payment;
