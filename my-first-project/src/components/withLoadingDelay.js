import React, { useState, useEffect } from "react";
import { SpinnerCircular } from "spinners-react";
import "./Card.css";

const withLoadingDelay = (Component) => {
  return function (props) {
    const [isLoading, setIsloading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setIsloading(false);
      }, 2000);
    });

    return isLoading ? (
      <SpinnerCircular className="loading-position " />
    ) : (
      <Component {...props} />
    );
  };
};

export default withLoadingDelay;
