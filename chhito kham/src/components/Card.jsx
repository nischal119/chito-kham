import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import React from "react";
const ItemCard = (cardImages) => {
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [size, setSize] = React.useState("");
  const handleChangeSize = (event) => {
    setSize(event.target.value);
  };

  const quantityOptions = [1, 2, 3, 4];
  const sizeOptions = ["Half", "Full"];
  return (
    <div>
      <Card sx={{ maxWidth: 350, padding: "20px" }}>
        <CardMedia
          sx={{ height: 140 }}
          image={cardImages.images}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <Box sx={{ minWidth: 120 }}>
          <FormControl sx={{ minWidth: "120px", marginRight: "30px" }}>
            <InputLabel id="quantity-label">Quantity</InputLabel>
            <Select
              labelId="quantity-label"
              id="quantity-select"
              value={age}
              label="Quantity"
              onChange={handleChange}
            >
              {quantityOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl sx={{ minWidth: "120px" }}>
            <InputLabel id="size-label">Size</InputLabel>
            <Select
              labelId="size-label"
              id="size-select"
              value={size}
              label="Size"
              onChange={handleChangeSize}
            >
              {sizeOptions.map((option, index) => (
                <MenuItem key={index} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Typography>Total price: 1200</Typography>
        </Box>
      </Card>
    </div>
  );
};

export default ItemCard;
