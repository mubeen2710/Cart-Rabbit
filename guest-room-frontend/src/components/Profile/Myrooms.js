import React,{useState , useEffect} from "react";
import Room from "./Room";
import ownerService from "../../services/owner.service";
const Myrooms = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    const getRoom = async () => {
      ownerService.getMyRooms().then((dat) => {
        setRooms(dat.data);
      });
    };
    getRoom();
  }, []);
  return <>
  {typeof(rooms) !='undefined'?
  rooms.map((room, id) => (
    <Room room={room} key={id} />
  )) : ''
}
  </>;
};

export default Myrooms;
