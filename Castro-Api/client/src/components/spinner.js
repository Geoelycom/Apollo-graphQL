import React from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

const Spinner = () => {
    return(
      <Loader type="Circles" 
      color="#C8A2C8" 
      height={80}
      width={80} 
      timeout={3000} 
      />
    )
  }
export default Spinner;