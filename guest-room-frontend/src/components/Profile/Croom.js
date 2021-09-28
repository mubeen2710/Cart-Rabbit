import React, { useState, useEffect } from "react";
import { FaWifi, FaTv, FaCarBattery } from "react-icons/fa";
import { GiCctvCamera } from "react-icons/gi";
import { useHistory } from "react-router-dom";
import generalService from '../../services/general.service';

import "../Home/Home.css";
import Csubroom from "./Csubroom";


const Croom = () => {
  const [rooms, setRooms] = useState([]);
 
  useEffect(() => {
    const getRoom = async () => {
      generalService.getMyBookings().then((dat) => setRooms(dat.data));
    };
    getRoom();
  }, []);
  return (
    <>
      {typeof(rooms) !='undefined'?
  rooms.map((room) => (
    <Csubroom room={room}  />
  )) : ''
}
    </>
  );
};

export default Croom;
