import React, { Component } from "react";
import Gradient from "./Gradient";


class AnimeGradient extends Component {
  componentDidMount() {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }

  render() {
    const gradientCanvas = {
      "--gradient-color-1": "#FA2805",
      "--gradient-color-2": "#AE83A3",
      "--gradient-color-3": "#E17578",
      "--gradient-color-4": "#1A1A1A",
    };

    return (
      <div className="animegradient">
        <script>{`var gradient = new Gradient(); gradient.initGradient('#gradient-canvas');`}</script>
        <canvas id="gradient-canvas" style={gradientCanvas}></canvas>
      </div>
    );
  }
}

export default AnimeGradient;
