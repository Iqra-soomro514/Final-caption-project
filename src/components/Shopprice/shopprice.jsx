import React from "react";
import { Grid, Button, Typography, Container } from "@mui/material";

function ShopPrice() {
  const priceRanges = [
    "Below Rs. 15,000",
    "Rs. 15,000 - Rs. 25,000",
    "Rs. 25,000 - Rs. 40,000",
    "Rs. 40,000 - Rs. 60,000",
    "Rs. 60,000 - Rs. 80,000",
    "Rs. 80,000 - Rs. 100,000",
    "Rs. 100,000 - Rs. 150,000",
    "Above 150,000",
  ];

  return (
    <Container
      style={{
        padding: "20px 20px 0 20px",
        marginTop: "200px", 
      }}
    >
      {/* Header Section */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
            marginTop: "50px", // Adjusted margin for better spacing
          }}
        >
          <Typography
            variant="h5"
            style={{ fontWeight: "bold", textAlign: "center" }}
          >
            Shop by Price
          </Typography>
          <Button
            className="!text-black !bg-white !hover:text-slate-300 !capitalize"
            variant="contained"
            sx={{
              display: { xs: "none", sm: "block" }, // Hide on small screens
            }}
          >
            View All
          </Button>
        </div>

        {/* Price Grid */}
        <Grid container spacing={2}>
          {priceRanges.map((range, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#ffeb3b",
                  color: "#000",
                  position: "relative",
                  overflow: "hidden",
                  textTransform: "none",
                  padding: "10px",
                  fontWeight: "bold",
                  height: "50px",
                  zIndex: 1,
                  transition: "background-color 0.3s ease-in-out",
                  "&:hover": {
                    backgroundColor: "#87CEEB",
                    color: "#fff",
                  },
                }}
              >
                {range}
              </Button>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
}

export default ShopPrice;
