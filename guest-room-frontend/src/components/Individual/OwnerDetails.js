import React from "react";

const OnwerDetails = ({ owner }) => {
  return (
    <>
      <div className="owner">
        <p>owner name: {owner.username}</p>
        <p>number: {owner.phone}</p>
        <p>email: {owner.email}</p>
      </div>
    </>
  );
};

export default OnwerDetails;
