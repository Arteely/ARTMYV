import React, { Component } from "react";


class AnimeGrad extends Component {
  componentDidMount() {
    const gradient = new Gradient();
    gradient.initGradient("#gradient-canvas");
  }

  render() {
    const gradientCanvas = {
      "--gradient-color-1": "#FB432D",
      "--gradient-color-2": "#AE83A3",
      "--gradient-color-3": "#E17578",
      "--gradient-color-4": "#151515"
    };

    return (
      <div className="animegrad">
        <script>{`var gradient = new Gradient(); gradient.initGradient('#gradient-canvas');`}</script>
        <canvas id="gradient-canvas" style={gradientCanvas}></canvas>
      </div>
    );
  }
}

export default AnimeGrad;
