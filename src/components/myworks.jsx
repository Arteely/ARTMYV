import { Component } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

class MyWorks extends Component {
  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      },
    };
    return (
      <div className="about-section" id="works">
        <h2>MY WORKS</h2>
        <p>私の仕事</p>
        <Carousel
          responsive={responsive}
          containerClass="carousel-container"
          itemClass="carousel-item"
          infinite
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={3000}
        >
          <div>
            <h2>WORK #1</h2>
            <p>2022</p>
          </div>
          <div>
            <h2>WORK #2</h2>
            <p>2022</p>
          </div>
          <div>
            <h2>WORK #3</h2>
            <p>2022</p>
          </div>
          <div>
            <h2>WORK #4</h2>
            <p>2023</p>
          </div>
          <div>
            <h2>WORK #5</h2>
            <p>2023</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default MyWorks;
