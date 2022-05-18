import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function FormModal(props) {

  function userDropdowns(users, people) {
    const mappedUsers = users?.map((user) => {
      const selected = people.find((people) => user === user._id)
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
            <i className="far fa-calendar-plus"></i> Reservation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <form {...props} autocomplete="off"> */}
          <form autoComplete="off">
            <div className="form-group">
              <label htmlFor="title"> Username </label>
              <input
                type="text"
                className="form-control"
                id="user"
                placeholder="Username"
                value={props.user}
                name="user"
                onChange={props.handleInputChange}
              />
              <p className="error">{props.errorUser}</p>
            </div>
            {/* <div className="form-group">
              <label> Field Size </label>
              <input
                type="text"
                className="form-control"
                id="field"
                placeholder="Field Size"
                value={props.fieldSize}
                name="field"
                onChange={props.handleInputChange}
              />
              <p className="error">{props.errorFieldSize}</p>
            </div> */}

            <div className="form-group">
              <label htmlFor="start"> Date</label>
              <input
                type="date"
                className="form-control"
                id="start"
                placeholder="MM-DD-YYYY"
                value={props.start}
                name="start"
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
              <label htmlFor="description"> Comments </label>
              <textarea
                className="form-control"
                id="description"
                rows="4"
                value={props.description}
                name="description"
                onChange={props.handleInputChange}
              ></textarea>
              <p className="error">{props.errorDescription}</p>
            </div> */}
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.close} variant="contained" color="" >
            Close
          </Button>
          <Button onClick={props.save} variant="primary" className="newEvent">
            Reserve
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}
