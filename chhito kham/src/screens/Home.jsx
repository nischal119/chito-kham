import React from "react";

import Navbar from "../components/Navbar";

import Card from "../components/Card";
import Carousel from "../components/Carousel";

const images = [
  "https://source.unsplash.com/random/900x300/?burger",
  "https://source.unsplash.com/random/900x300/?pizza",
  "https://source.unsplash.com/random/900x300/?cake",
  "https://source.unsplash.com/random/900x300/?icecream",
  "https://source.unsplash.com/random/900x300/?chocolate",
];
const cardImages = [
  "https://source.unsplash.com/random/900×700/?sizzler",
  "https://source.unsplash.com/random/900×700/?burger",
  "https://source.unsplash.com/random/900x300/?icecream",
  "https://source.unsplash.com/random/900x300/?chocolate",
];

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <Carousel images={images} />
      <div
        style={{
          padding: "2rem",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Card images={cardImages[0]} />
        <Card images={cardImages[1]} />
        <Card images={cardImages[2]} />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
