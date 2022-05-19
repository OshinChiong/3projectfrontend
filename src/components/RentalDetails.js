import React from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Clock from "./Clock";

import FormModal from "./FormModal";
import RentalCard from "./RentalCard";
// import "./main.scss";
import moment from "moment-timezone";
import { get, post } from "../authService/authService";
import { useNavigate } from "react-router-dom";
import { useParams, Link  } from "react-router-dom";


const RentalDetails = () => {
  const [field, setField]  = React.useState({});
  const [time, setTime]  = React.useState("");
  const [date, setDate]  = React.useState("");
  const [people, setPeople]  = React.useState([]);
  //const [rental, setRental]  = React.useState([]);
  const [state, setState] = React.useState({
    calendar: true,
    eventSources: [],
    id: "",
    user: "",
    // date: new Date(),
    date: "",
    time: "",
    field: "",
    size: "",
    // comment: "",
    showModal: false,
    showCard: false,
    users: [],
    people: [],
   });
  
  const navigate = useNavigate();
  const params  = useParams();
  const {id} = useParams()

  React.useEffect(() => {
     reserve();
  }, []);
// display  on calendar
const reserve = () => {
  // get(`/rental/view-rental`)
  get(`/rental/view-rental/${params.id}`)
  .then((resp) => {
      console.log(resp.data);
      setState({
        ...state,
        showCard: false,
        eventSources: resp.data.map((e) => {
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
    console.log("event.event", event.event);
    console.log("event.event.extendedProps", event.event.extendedProps);
    //This is the rental id
    console.log("vent.event.extendedProps._id", event.event.extendedProps._id);
    setState({
       ...state,
      showCard: true,
      id:event.event.extendedProps._id
    });
    handleReserve(event.event.extendedProps._id);
  };




  const handleReserve = (rentalId) => {
    //rentalId is the id of the resevation
    //params.id is the id of the field
    get(`/rental/${rentalId}/edit`)
      .then((res) => {
        console.log("You have Reserve this field", res.data.rentalData);
        const dateStart = res.data.rentalData.start;
        const start = moment(dateStart).tz("UTC").format("YYYY-MM-DD");
        const dateEnd = res.data.rentalData.end;
        const end = moment(dateEnd).tz("UTC").format("YYYY-MM-DD");
        setState({
          ...state,
          showCard: true,
          rentalId: res.data.rentalData._id,
          user: res.data.rentalData.user,
          start: date,
          time: "",
          field: "",
          // comment: res.data.comment,
          people: res.data.people,
        });
      })
      .catch((err) => console.log(err));
  };

  // button 
  const handleDeleteClick = (id) => {
    console.log("Handle Delete click", id);
    setState({
      ...state,
      showCard: false,
    });
    handleDeleteReservation(state.id);
  };

  // save changes button 
  const handleUpdateClick = () => {
    console.log("Handle update click");
    console.log("STATE", state)
    if (state.user && state.start && state.time ) {
      setState({
        ...state,
        showCard: false,
       
      });
      handleUpdateRental(state.id);
      console.log("Los Cadejos", state.id)
      setState({
        ...state,
        errorUser: "",
        errorStart: "",
        errorTime: "",
   
      });
    } else {
      setState({
        ...state,
        id: state.id 
        // errorUser: "*Please enter your user",
        // errorDate: "*Please enter date",
        // errorTime: "*Please enter time",
        // errorComments: "*Please enter comments",
      });
    }
  };

  const handleDeleteReservation = (id) => {
    post(`/rental/${state.rentalId}/delete`, state)
    
      .then(() => {
        localStorage.removeItem("reservation");
        reserve();
      })
      .catch((err) => console.log(err));
  };

  // update a reservation 
  const handleUpdateRental = () => {
    console.log("DID THIS HAPPEN?", state)
    console.log("IDDDDD", state.rentalId)
    // .update(id, state)
    post(`/rental/${state.rentalId}/edit`, state)
      .then((foundRental) => {
        localStorage.setItem("rental", foundRental.data);
        reserve();
        console.log("!!!!!!", state)
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
      errorUser: "",
      errorDate: "",
      errorTime: "",
      // errorComment: "",
    });
  };

  const handleDateClick = () => {
    console.log("handle Date Click!!!")
    setState({
      ...state,
      showModal: true,
      user: "",
      start: new Date().getUTCHours(),
      time: new Date().getUTCHours(),
      // commet: "",
    });
  };

// people list on that day
  const handleUserChange = (event) => {
    let asArr = Array.prototype.slice.call(event.target.options);
    let peopleIds = asArr
      .filter((option) => option.selected)
      .map((option) => option.value);
    setState({
      ...state,
      people: peopleIds
    });
  };

  // save a new reservation 
  const handleSaveRental = () => {
    if (state.user && state.start && state.time) {
      post(`/rental/create/${id}`, state)
      // console.log("!!!!", id)
        .then(() => {
          setState({
            ...state,
            showModal: false,
          });
          console.log(state)
          // navigate(`/reserve/${id}`);
          navigate(`/allRentals/${id}`);
        })
        .catch((err) => console.log(err));
      setState({
        ...state,
        field: "",
        time: "",
        date: new Date().getUTCHours(),
   
        // errorComments: "",
        people: [],
      });
    } else {
      setState({
        ...state,
        errorUser: "*Please enter your user",
        // errorFirstName: "*Please enter your First Name ",
        // errorLastName: "*Please enter your Last Name",
        // errorDate: "*Please enter the date",
        // errorTime: "*Please enter time",
        // errorcomment: "*Please enter t",
      });
    }
  };
  // console.log("card and modal", state);
  return (
    <div className="demo-app">
 
      <FormModal
        show={state.showModal}
        {...state}
        close={handleCloseClick}
        save={() => handleSaveRental()}
        handleInputChange={handleInputChange}
        handleUserChange={handleUserChange}
      />
      <RentalCard
        show={state.showCard}
        {...state}
        close={handleCloseClick}
        delete={handleDeleteClick}
        save={handleUpdateClick}
        handleInputChange={handleInputChange}
        handleUserChange={handleUserChange}
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
//           events={ [
//     {
//       title: 'Event1',
//       start: '2022/05/01'
//     },
//     {
//       title: 'Event2',
//       start: '2022/05/06'
//     }
 
//   ]

// }
        />
      </div>
    </div>
  );
  
};
// }


export default RentalDetails;




// const players = [
//   "1 Player",
//   "2 Players",
//   "3 Players",
//   "4 Players",
//   "5 Players",
//   "6 Players",
//   "7 Players",
//   "8 Players",
//   "9 Players",
//   "10 Players",
//   "11 Players",
//   "12 Players",
//   "13 Players",
//   "14 Players",
//   "15 Players",
//   "16 Players",
//   "17 Players",
//   "18 Players",
//   "19 Players",
//   "20 Players",
//   "21 Players",
//   "22 Players",
// ]
