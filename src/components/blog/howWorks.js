import React from "react";
import { Link } from "react-router-dom";

const HowWorks = () => {
  return (
    <div className="howWorksBkg">
      <div>
        <p>
          <image
            src="https://image.freepik.com/free-photo/closeup-two-business-men-shaking-hands_1262-3740.jpg"
            className="shakingHandsImg"
            alt="shaking-hands-photo"
          ></image>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed
          mauris consequat, semper erat in, ullamcorper dui. In hac habitasse
          platea dictumst. Integer interdum velit tellus, eget semper est
          faucibus eget. Donec a egestas elit, in pretium ante. Quisque nisi
          erat, vehicula eget interdum nec, maximus non purus. Nullam ut sodales
          quam. Morbi vel purus porttitor, consectetur lorem vel, malesuada
          lectus. Fusce eros urna, condimentum at lacus ut, dictum tempus
          turpis. Vivamus id est sed elit congue pulvinar.
        </p>
      </div>
      <div class="jumbotron">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr class="my-4"></hr>
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p class="lead">
          <Link class="btn btn-primary btn-lg" href="#" role="button">
            Learn more
          </Link>
        </p>
      </div>
    </div>
  );
};

export default HowWorks;
