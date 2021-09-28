import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import ownerService from "../../services/owner.service";
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Add = () => {
  const form = useRef();
  const checkBtn = useRef();
  const [houseName, setHouseName] = useState();
  const [address1, setaddress1] = useState();
  const [address2, setaddress2] = useState();
  const [address3, setaddress3] = useState();
  const [rooms, setRooms] = useState();
  const [rent, setRent] = useState();
  const [maxDuration, setMaxDuration] = useState();
  const [image1, setImage1] = useState();
  const [image2, setImage2] = useState();
  const [image3, setImage3] = useState();
  const [wifi, setWifi] = useState(false);
  const [tv, setTv] = useState(false);
  const [cctv, setCctv] = useState(false);
  const [power, setPower] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangehouseName = (e) => {
    const houseName = e.target.value;
    setHouseName(houseName);
  };
  const onChangeaddress1 = (e) => {
    const address1 = e.target.value;
    setaddress1(address1);
  };
  const onChangeaddress2 = (e) => {
    const address2 = e.target.value;
    setaddress2(address2);
  };
  const onChangeaddress3 = (e) => {
    const address3 = e.target.value;
    setaddress3(address3);
  };
  const onChangeRooms = (e) => {
    const rooms = e.target.value;
    setRooms(rooms);
  };
  const onChangeRent = (e) => {
    const rent = e.target.value;
    setRent(rent);
  };
  const onChangeMaxDuration = (e) => {
    const maxDuration = e.target.value;
    setMaxDuration(maxDuration);
  };
  const onChangeImage1 = (e) => {
    setImage1(e.target.files[0]);
  };
  const onChangeImage2 = (e) => {
    setImage2(e.target.files[0]);
  };
  const onChangeImage3 = (e) => {
    setImage3(e.target.files[0]);
  };
  const onChangeWifi = (e) => {
    const wifi = e.target.checked;
    setWifi(wifi);
  };
  const onChangeTv = (e) => {
    const tv = e.target.checked;
    setTv(tv);
  };
  const onChangeCctv = (e) => {
    const cctv = e.target.checked;
    setCctv(cctv);
  };
  const onChangePower = (e) => {
    const power = e.target.checked;
    setPower(power);
  };
  const handleAdd = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      ownerService
        .addRoom(
          houseName,
          address1,
          address2,
          address3,
          rooms,
          rent,
          maxDuration,
          image1,
          image2,
          image3,
          wifi,
          tv,
          cctv,
          power
        )
        .then(
          (response) => {
            setMessage(response.data.message);
            setSuccessful(true);
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            setMessage(resMessage);
            setSuccessful(false);
          }
        );
    }
  };
  return (
    <div className="form1">
      <Form onSubmit={handleAdd} ref={form}>
        {!successful && (
          <div>
            <div className="row">
              <div className="col">
                <div className="form-group">
                  <label htmlFor="houseName">house/Building Name</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="houseName"
                    value={houseName}
                    onChange={onChangehouseName}
                    validations={[required]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address1">Address line 1</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="address1"
                    value={address1}
                    onChange={onChangeaddress1}
                    validations={[required]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address2">Address line 2</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="address2"
                    value={address2}
                    onChange={onChangeaddress2}
                    validations={[required]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address3">Address line 3</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="address3"
                    value={address3}
                    onChange={onChangeaddress3}
                    validations={[required]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="rooms">Total No.of Rooms </label>
                  <Input
                    type="number"
                    className="form-control"
                    name="rooms"
                    value={rooms}
                    onChange={onChangeRooms}
                    validations={[required]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="rent">Rent per room for a day </label>
                  <Input
                    type="number"
                    className="form-control"
                    name="rent"
                    value={rent}
                    onChange={onChangeRent}
                    validations={[required]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="maxDuration">Maximun no of Stay</label>
                  <Input
                    type="number"
                    className="form-control"
                    name="maxDuration"
                    value={maxDuration}
                    onChange={onChangeMaxDuration}
                    validations={[required]}
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-group">
                  <label htmlFor="rooms">image1 </label>
                  <Input
                    type="file"
                    className="form-control"
                    name="rooms"
                    onChange={onChangeImage1}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="rooms">image2 </label>
                  <Input
                    type="file"
                    className="form-control"
                    name="rooms"
                    onChange={onChangeImage2}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="rooms">image3 </label>
                  <Input
                    type="file"
                    className="form-control"
                    name="rooms"
                    onChange={onChangeImage3}
                  />
                </div>
                <div className="form-group">
                  Facilities Available
                  <br />
                  <br />
                  <div>
                    wifi
                    <Input
                      type="checkbox"
                      name="wifi"
                      onChange={onChangeWifi}
                      className="flori"
                    />{" "}
                    <br />
                    TV
                    <Input
                      type="checkbox"
                      name="tv"
                      onChange={onChangeTv}
                      className="flori"
                    />{" "}
                    <br />
                    CCTV
                    <Input
                      type="checkbox"
                      name="cctv"
                      onChange={onChangeCctv}
                      className="flori"
                    />{" "}
                    <br />
                    power backup
                    <Input
                      type="checkbox"
                      name="power"
                      onChange={onChangePower}
                      className="flori"
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
            <br />
            <br />
            <div className="form-group">
              <button className="btn btn-primary btn-block">Add Room</button>
            </div>
          </div>
        )}

        {message && (
          <div className="form-group">
            <div
              className={
                successful ? "alert alert-success" : "alert alert-danger"
              }
              role="alert"
            >
              {message}
            </div>
          </div>
        )}
        <CheckButton style={{ display: "none" }} ref={checkBtn} />
      </Form>
    </div>
  );
};

export default Add;
