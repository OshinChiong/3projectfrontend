import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function FormModal(props) {

  function userDropdowns(users, players) {
    const mappedUsers = users?.map((user) => {
      const selected = players.find((players) => user === user._id)
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
                id="title"
                placeholder="Username"
                value={props.title}
                name="title"
                onChange={props.handleInputChange}
              />
              <p className="error">{props.errorTitle}</p>
            </div>
            <div className="form-group">
              <label> Field Size </label>
              <input
                type="text"
                className="form-control"
                id="field"
                placeholder="Field Size "
                value={props.field}
                name="firstName"
                onChange={props.handleInputChange}
              />
              <p className="error">{props.errorField}</p>
            </div>
            {/* <div className="form-group">
              <label> Size </label>
              <input
                type="text"
                className="form-control"
                id="Size"
                placeholder="size"
                value={props.size}
                name="Size"
                onChange={props.handleInputChange}
              />
              <p className="error">{props.errorSize}</p>
            </div> */}

            <div className="form-group">
              <label htmlFor="startDate"> Date</label>
              <input
                type="date"
                className="form-control"
                id="start"
                placeholder="YYYY-MM-DD"
                value={props.date}
                name="start"
                onChange={props.handleInputChange}
              />
              <p className="error">{props.errorTime}</p>
            </div>
           
            <div className="form-group">
              <label htmlFor="time"> Time </label>
              <input
                type="time"
                className="form-control"
                id="timepicker"
                placeholder="HH-mm-ss a"
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
          <Button onClick={props.close} variant="secondary">
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
