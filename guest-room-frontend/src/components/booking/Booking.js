import React, { useState, useRef, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import DatePicker from "react-datepicker";
import generalService from "../../services/general.service";
import { useLocation } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }

  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
const Booking = () => {
  const location = useLocation();

  const [qty, setQty] = useState();
  const [from, setFrom] = useState(new Date());
  const [to, setTo] = useState(new Date());
  const [md, setMd] = useState(1);
  const mnDate = new Date();
  const mxDate = new Date();
  const m2x = new Date(from);


  mxDate.setDate(mxDate.getDate() + md );
  m2x.setMonth(m2x.getMonth() + 1);
 
  const form = useRef();
  const [room, setRoom] = useState(1);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const checkBtn = useRef();

  const onChangeQty = (e) => {
    let qty = e.target.value;
    setQty(qty);
  };


  useEffect(() => {
    const getRoom = async () => {
      generalService.getOne(location.state.id).then((dat) => {
        setRoom(dat.data.rooms);
        setMd(dat.data.maxDuration)
      });
    };
    getRoom();
  },[]);

  const handleBooking = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      generalService
        .book(qty, from, to, location.state.id)
        .then()
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <Navbar />
      <div className="card card-container">
        <Form onSubmit={handleBooking} ref={form}>
          <div className="form-group">
            <label htmlFor="qty">no.of rooms required</label>
            <Input
              type="number"
              className="form-control"
              name="qty"
              value={qty}
              min='0'
              max={room}
              onChange={onChangeQty}
              validations={[required]}
            />
          </div>
          <div className="form-group">
            <label htmlFor="from">From:</label>
            <DatePicker
              selected={from}
              minDate={mnDate}
              maxDate={mxDate}
              onChange={(date) => setFrom(date)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="to">to:</label>
            <DatePicker
              selected={to}
              minDate={from}
              maxDate={m2x}
              onChange={(date) => setTo(date)}
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>Book</span>
            </button>
          </div>

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </div>
    </>
  );
};

export default Booking;
