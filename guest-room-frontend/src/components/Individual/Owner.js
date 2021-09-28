import React, { useState, useEffect } from "react";
import generalService from "../../services/general.service";
import OwnerDetails from "./OwnerDetails";

const Owner = ({ id }) => {
  const [owner, setOwner] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      generalService.getOwner(id).then((dat) => {
        setOwner(dat.data);
      });
    };

    getUser();
  }, []);
  return (
    <>{typeof owner != "undefined" ? <OwnerDetails owner={owner} /> : ""}</>
  );
};

export default Owner;
