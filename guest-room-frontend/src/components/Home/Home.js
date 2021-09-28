import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Rooms from "./Rooms";
import generalService from "../../services/general.service";

const Home = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const getRoom = async () => {
      generalService.getAll().then((dat) => {
        setRooms(dat.data);
      });
    };
    getRoom();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        {rooms.length > 0 ? (
          <Rooms rooms={rooms} key="id" />
        ) : (
          <h1>no rooms</h1>
        )}
      </div>
    </>
  );
};

export default Home;
