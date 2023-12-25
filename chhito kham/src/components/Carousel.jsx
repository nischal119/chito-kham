import { Button, TextField } from "@mui/material";
import React, { useState, useEffect } from "react";

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div id="carouselExampleFade" className="carousel slide carousel-fade">
      <div className="carousel-caption" style={{ zIndex: "10" }}>
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          sx={{
            border: "1px solid white",
            "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
              color: "white",
            },
            "& .css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
              color: "white",
            },
            width: "80%",
          }}
        />
        <Button
          variant="contained"
          color="success"
          sx={{ width: "150px", height: "59px", marginLeft: "1%" }}
        >
          Find Foods
        </Button>
      </div>
      <div className="carousel-inner">
        {images.map((src, index) => (
          <div
            key={index}
            className={`carousel-item ${index === activeIndex ? "active" : ""}`}
          >
            <img
              src={src}
              className="d-block w-100"
              alt={`Slide ${index + 1}`}
              style={{ objectFit: "cover", opacity: "0.3" }}
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
        onClick={handlePrev}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
        onClick={handleNext}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
