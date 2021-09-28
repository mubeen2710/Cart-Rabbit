import React, { useState, useEffect } from "react";
import { FaWifi, FaTv, FaCarBattery } from "react-icons/fa";
import { GiCctvCamera } from "react-icons/gi";
import { useHistory } from "react-router-dom";

import "../Home/Home.css";

const Room = (props) => {
  const history = useHistory();
  const clicked = () => {
    history.push({
      pathname: `/rooms/${props.room.id}`,
      state: { id: props.room.id },
    });
  };
  const [image1, setImage1] = useState("");

  useEffect(() => {
    const convert = async () => {
      let base64String = new Buffer.from(props.room.image1).toString("base64");

      setImage1(base64String);
    };
    convert();
  }, []);

  return (
    <>
      <div className="row block m-2" onClick={clicked}>
        <div className="col col-md-3 my-3">
          <img
            className="front"
            src={`data:image/png;base64,${image1}`}
            alt="fgth"
            width="150px"
          />
        </div>

        <div className="col my-3">
          <h3>{props.room.houseName}</h3>
          <p>Rooms Available:-{props.room.rooms}</p>
          <p>Facilities:-</p>
          {props.room.wifi == 1 ? <FaWifi /> : ""}
          <span> </span>
          {props.room.tv == 1 ? <FaTv /> : ""}
          <span> </span>
          {props.room.cctv == 1 ? <GiCctvCamera /> : ""}
          <span> </span>
          {props.room.power == 1 ? <FaCarBattery /> : ""}
        </div>

        <div className="col ">
          <div className="row mt-3">
            <div className="col-1">
              <p>Address:-</p>
            </div>
            <div className="col-1">
              <br/>

              {props.room.address1} <br />
              {props.room.address2} <br />
              {props.room.address3}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Room;
