import React, { useState, useEffect } from "react";
import "./Individual.css";
const Images = ({ img }) => {
  const [image, setImage] = useState();
  useEffect(() => {
    const convert = async () => {
      let base64String = new Buffer.from(img).toString("base64");

      setImage(base64String);
    };
    convert();
  }, []);
  return (
    <>
      <img src={`data:image/png;base64,${image}`} className="ind" alt="fgth" />
    </>
  );
};

export default Images;
