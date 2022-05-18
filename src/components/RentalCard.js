import React from "react";
import { Modal, Button } from "react-bootstrap";
import Clock from "./Clock";
import moment from "moment";
import { get } from "../authService/authService";

export default function RentalCard(props) {

  React.useEffect(()=>{
    get('/rental/allRentals/6283c5131717721c9cb3ab45')
    // get(`/rental/allRentals/6283c5131717721c9cb3ab45`)
    .then((results) => {
        console.log("this is results.data", results.data.rentalData)
      // setAllRental(results.data);
    })
    .catch((err) => {
      console.error(err.message);
    });
  },[])

  
  function userDropdowns(users, players) {
    const mappedUsers = users?.map((user) => {
      const selected = players.find((player) => player === user._id)
        ? true
        : false;
      return (
        <option value={user._id} selected={selected}>
          {user.username}
        </option>
      );
    });
    
    return mappedUsers;
  }
  
  return (
    <Modal show={props.show} id="reservation">
      <Modal.Dialog>
        <Modal.Header closeButton onClick={props.close}>
          <Modal.Title>
            <i className="far fa-edit"></i> Edit Your Reservation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form autoComplete="off">
            {/* <div className="form-group">
              <label htmlFor="title"> Reservation number </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Reservation"
                value={props.title}
                name="title"
                onChange={props.handleInputChange}
              />
              <p className="error">{props.errorTitle}</p>
            </div> */}

            {/* <div className="form-group">
              <label htmlFor="exampleFormControlSelect2"> Players </label>
              <select
                multiple
                className="form-control"
                id="exampleFormControlSelect2"
                onChange={props.handleGuestsChange}
              >
                {userDropdowns(props.users, props.players)}
              </select>
            </div> */}
        
           
            <div className="form-group">
              <label htmlFor="date"> Date</label>
              <input
                type="date"
                className="form-control"
                id="date"
                placeholder="MM-DD-YYYY"
                value={props.date}
                name="date"
                onChange={props.handleInputChange}
              />
              <p className="error">{props.errorDate}</p>
            </div>
            <div className="form-group">
              <label htmlFor="time"> Time </label>
              <input
                type="time"
                className="form-control"
                id="timepicker"
                placeholder="HH-mm-ss"
                value={props.time}
                name="time"
                onChange={props.handleInputChange}
              />
              <p className="error">{props.errorTime}</p>
            </div>
            {/* <div className="form-group">
              <label htmlFor="description"> Comment </label>
              <textarea
                className="form-control"
                id="comment"
                rows="4"
                value={props.comment}
                name="description"
                onChange={props.handleInputChange}
              ></textarea>
              <p className="error">{props.errorDescription}</p>
            </div> */}
          </form>
          <div>
            {moment(props.start).isSameOrAfter(moment()) && (
              <h4>
                <i className="far fa-clock"></i> Reservation 
              </h4>
            )}

            {moment(props.start).isSameOrAfter(moment()) && (
              <Clock deadline={props.start} />
            )}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            onClick={props.delete}
            variant="danger"
            className="deleteEvent"
          >
            Delete Reservation
          </Button>
          <Button onClick={props.save} variant="primary" className="saveEvent">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}