import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { useLocation } from "react-router-dom";
import generalService from "../../services/general.service";
import Images from "./Images";
import Owner from "./Owner";
import { useHistory } from "react-router-dom";
const Individual = () => {
  const history = useHistory();
  const location = useLocation();
  const booking = () => {
    history.push({
      pathname: `/booking/${location.state.id}`,
      state: { id: location.state.id },
    });
  };

  const [room, setRoom] = useState([]);
  const [image1, setImage1] = useState("");
  useEffect(() => {
    const getRoom = async () => {
      generalService.getOne(location.state.id).then((dat) => {
        setRoom(dat.data);
      });
    };

    getRoom();
  }, []);

  return (
    <>
      <Navbar />

      <br />
      <br />
      <br />
      {typeof room.image1 !== "undefined" ? (
        <>
          <div className="container">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <Images
                    img={room.image1}
                    class="d-block w-100"
                    alt="First slide"
                  />
                </div>
                <div class="carousel-item">
                  <Images
                    img={room.image2}
                    class="d-block w-100"
                    src="..."
                    alt="Second slide"
                  />
                </div>
                <div class="carousel-item">
                  <Images
                    img={room.image3}
                    class="d-block w-100"
                    src="..."
                    alt="Third slide"
                  />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
            <h3> {room.houseName}</h3>
            <p>
              address:-{room.address1},{room.address2},{room.address3}
            </p>
            <h3>Rent:-{room.rent}</h3>
            <Owner id={room.userId} /> <br />
            <button className="btn btn-outline-dark" onClick={booking}>
              book now
            </button>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Individual;
