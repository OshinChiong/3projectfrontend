import React from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import RentalForm from "./FormModal";
import Clock from "./Clock";
import RentalCard from "./RentalCard";
// import "./main.scss";
import moment from "moment-timezone";
// import NavBar from "./NavBar";
import { get, post } from "../authService/authService";
import { useNavigate } from "react-router-dom";
import { useParams, Link  } from "react-router-dom";



const players = [
  "1 Player",
  "2 Players",
  "3 Players",
  "4 Players",
  "5 Players",
  "6 Players",
  "7 Players",
  "8 Players",
  "9 Players",
  "10 Players",
  "11 Players",
  "12 Players",
  "13 Players",
  "14 Players",
  "15 Players",
  "16 Players",
  "17 Players",
  "18 Players",
  "19 Players",
  "20 Players",
  "21 Players",
  "22 Players",
]


const RentalDetails = () => {
  const [field, setField]  = React.useState({});
  const [time, setTime]  = React.useState([]);
  const [players, setPlayers]  = React.useState([]);
  const [state, setState] = React.useState({
    calendarWeekends: true,
    eventSources: [],
    id: "",
    title: "",
    start: new Date(),
    time: "",
    comment: "",
    showModal: false,
    errorTitle: "",
    errorStart: "",
    errorComment: "",
    showCard: false,
    users: [],
    players: [],
   });
  
  const navigate = useNavigate();
  const params  = useParams();
  const {id} = useParams()


  console.log("PARAMS", params)
  React.useEffect(() => {
    reserve();
  }, []);

  const reserve = () => {
    get(`https://soccerloco.herokuapp.com/field/${params.fieldId}`)
      .then((results) => {
        console.log(results.data);
        setField({
          ...state,
          showCard: false,
          eventSources: results.data.map((e) => {
            let start = moment(e.start).tz("UTC").format("YYYY-MM-DD");
            let end = moment(e.end)
              .tz("UTC")
              .add(1, "days")
              .format("YYYY-MM-DD");
            return {
              ...e,
              start: start,
              end: end,
            };
          }),
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  
  const calendarComponentRef = React.createRef();
  const handleEventClick = (event) => {
   
    console.log("Handle event click");
    setField({
      // ...state,
      showCard: true,
    });
    handleReserve(event.event.extendedProps._id);
  };

  const handleReserve = (rentalId) => {
    console.log(rentalId);
    axios
    .get(`https://soccerloco.herokuapp.com/field/${params.fieldId}`)
      .then((res) => {
        console.log("You have Reserve this field", res.data);
        const dateStart = res.data.start;
        const start = moment(dateStart).tz("UTC").format("YYYY-MM-DD");
        // const dateEnd = res.data.end;
        // const end = moment(dateEnd).tz("UTC").format("YYYY-MM-DD");
        setState({
          ...state,
          showCard: true,
          rentalId: res.data._id,
          title: res.data.title,
          start: start,
          times: "",
          comment: res.data.comment,
          players: res.data.players,
        });
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteClick = () => {
    console.log("Handle Delete click");
    setState({
      ...state,
      showCard: false,
    });
    handleDeleteReservation(state.id);
  };

  const handleUpdateClick = () => {
    console.log("Handle update click");
    if (state.title && state.start && state.end ) {
      setState({
        ...state,
        showCard: false,
      });
      handleUpdateRental(state.id);
      setState({
        ...state,
        errorTitle: "",
        errorStart: "",
        errorTime: "",
        errorComment: "",
      });
    } else {
      setState({
        ...state,
        errorTitle: "*Please enter your username",
        errorStart: "*Please enter date",
        errorTime: "*Please enter time",
        // errorComments: "*Please enter comments",
      });
    }
  };

  const handleDeleteReservation = (id) => {
    post(`/rental/${id}/delete`)
      .then(() => {
        localStorage.removeItem("reservation");
        reserve();
      })
      .catch((err) => console.log(err));
  };

  const handleUpdateRental = (id) => {
    post(`/rental/${id}/`, state)
      // .update(id, state)
      .then((foundRental) => {
        localStorage.setItem("rental", foundRental.data);
        reserve();
      })
      .catch((err) => console.log(err));
  };

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    // Updating the input's state
    setState({
      ...state,
      [name]: value,
    });
  };

  // close modal and clear input
  const handleCloseClick = () => {
    console.log("Handle close click");
    setState({
      ...state,
      showModal: false,
      showCard: false,
      errorTitle: "",
      errorStart: "",
      errorLocation: "",
      errorTime: "",
      errorComment: "",
    });
  };

  const handleDateClick = () => {
    setState({
      ...state,
      startDate: new Date(),
      showModal: true,
      title: "",
      location: "",
      start: new Date().getUTCHours(),
      end: new Date().getUTCHours(),
      commet: "",
    });
  };

  const handleGuestsChange = (event) => {
    let asArr = Array.prototype.slice.call(event.target.options);
    let playersIds = asArr
      .filter((option) => option.selected)
      .map((option) => option.value);

    setState({
      ...state,
      players: playersIds,
    });
  };

  const handleSaveRental = () => {
    if (state.title && state.start && state.time) {
      post(`/rental/create/${params.id}`, state)
        .then(() => {
          setState({
            ...state,
            showModal: false,
          });
          navigate(`/details/${id}`);
        })
        .catch((err) => console.log(err));
      setState({
        ...state,
        title: "",
        start: new Date().getUTCHours(),
        // end: new Date().getUTCHours(),
        commments: "",
        errorTitle: "",
        errorTime: "",
        errorStart: "",
        errorComments: "",
        players: [],
      });
    } else {
      setState({
        ...state,
        errorTitle: "*Please enter your username",
        errorFirstName: "*Please enter your First Name ",
        errorLastName: "*Please enter your Last Name",
        errorStart: "*Please enter the start date",
        errorTime: "*Please enter time",
        // errorcomment: "*Please enter t",
      });
    }
  };
  console.log("card and modal", state.showCard, state.showModal);
  return (
    <div className="demo-app">
      {/* <NavBar /> */}
      <RentalForm
        show={state.showModal}
        {...state}
        close={handleCloseClick}
        save={() => handleSaveRental()}
        handleInputChange={handleInputChange}
        handleGuestsChange={handleGuestsChange}
      />
      <RentalCard
        show={state.showCard}
        {...state}
        close={handleCloseClick}
        delete={handleDeleteClick}
        save={handleUpdateClick}
        handleInputChange={handleInputChange}
        handleGuestsChange={handleGuestsChange}
      />
      {/* <div className="demo-app-top mb-4">
        &nbsp;
        <button onClick={gotoPast} className="btn btn-dark">
          go to a date in the past
        </button>
        &nbsp; (also, click a date/time to add an event)
      </div> */}

      <div className="demo-app-calendar">
        <FullCalendar
          initialView="dayGridMonth"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
          }}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          ref={calendarComponentRef}
          weekends={state.calendarWeekends}
          events={state.eventSources}
          dateClick={handleDateClick}
          eventClick={handleEventClick}
        />
      </div>
    </div>
  );
  
};
// }


export default RentalDetails;