import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import seaOtter from './assets/img/betterOtter-1.jpg';
import seaOtter2 from './assets/img/betterOtter-2.jpg';
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";



function FundCarousel() {

  return (
      <Carousel>
        <Carousel.Item>
          <img
              className="d-block w-100"
              src={seaOtter}
              alt="First slide"
              width={"90%"}
              className="imgRadius"
          />
          <Carousel.Caption>
            <h3>BetterDAO NFTs are backed by real value.</h3>
            {/*<p>Support the animals at the Alaska SeaLife Center by symbolically adopting one of the animals found at the Center.</p>*/}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
              className="d-block w-100"
              src={seaOtter2}
              alt="Second slide"
              width={"90%"}
              className="imgRadius"

          />

          <Carousel.Caption>
            <h3>BetterDAO NFTs are backed by real value.</h3>
            {/*<p>The female harbor seal pup that we released in King Salmon at the beginning of October is still on the move!</p>*/}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  );
}

export default FundCarousel;
