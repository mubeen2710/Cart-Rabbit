import React from "react";
import Room from "./Room";
const Rooms = ({ rooms }) => {
  return (
    <>
      {rooms.map((room, id) => (
        <Room room={room} key={id} />
      ))}
    </>
  );
};

export default Rooms;
