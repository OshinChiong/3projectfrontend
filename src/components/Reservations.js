import React from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Modal, Button } from "react-bootstrap";
import Clock from "./Clock";
import moment from "moment";
import { Routes, Route } from "react-router-dom";
import RentalForm from "./FormModal";
import RentalCard from "./RentalCard";
import { get, post } from "../authService/authService";
import { useNavigate } from "react-router-dom";
import { useParams, Link  } from "react-router-dom";


// export default class DemoApp extends React.Component {
//   render() {
//     return (
//       <FullCalendar
//         plugins={[ dayGridPlugin ]}
//         eventContent={renderEventContent}
//       />
//     )
//   }
// }

// function renderEventContent(eventInfo) {
//   return (
//     <>
//       <b>{eventInfo.timeText}</b>
//       <i>{eventInfo.event.title}</i>
//     </>
//   )
// }





// const times = [
//     "09:00 AM",
//     "09:30 AM",
//     "10:00 AM",
//     "10:30 AM",
//     "11:00 AM",
//     "11:30 AM",
//     "12:00 PM",
//     "12:30 PM",
//     "01:00 PM",
//     "01:30 PM",
//     "02:00 PM",
//     "02:30 PM",
//     "03:00 PM",
//     "03:30 PM",
//     "04:00 PM",
//     "04:30 PM",
//     "05:00 PM",
//     "05:30 PM",
//     "06:00 PM",
//     "06:30 PM",
//     "07:00 PM",
//     "07:30 PM",
//     "08:00 PM",
//     "08:30 PM",
//     "09:00 PM",
//     "09:30 PM",
//     "10:00 PM",
//     "10:30 PM",
//     "11:00 PM",
//     "11:30 PM",
//   ]

//   export default function Reservations() {
//     const [allRental, setAllRental] = React.useState({});
    
//     const navigate = useNavigate();
//     const params  = useParams(); 

//     React.useEffect(() => {
//         console.log("Going")
//         get('/rental/allRentals/6283c5131717721c9cb3ab45')
//         // get(`/rental/allRentals/6283c5131717721c9cb3ab45`)
//         .then((results) => {
//             console.log("this is results.data", results.data)
//           setAllRental(results.data);
//         })
//         .catch((err) => {
//           console.error(err.message);
//         });
//     }, []);
    
//     //   const Reservations = (props) => {

//       return (
//         <div> 
//          <h1> Your reservation Details </h1>
//           {/* {allRental.map((rental) => {
         
//               return (
//                   <div> 
//         <p> {rental.user} </p>
//         <p> {rental.field} </p>
//         <p> {rental.date} </p>
//         <p> {rental.time} </p>
//         <Link to={`/reserve/${rental._id}/allRental`}> See Details  </Link>
//           </div>
         
//          );
//           })} */}
//      </div>
//      );
//      }
    





// class Reservations  {
//     constructor(props) {
    
//       this.state = {
//         trips: [],
//         show: false,
//       };
  
//       this.handleCalendarChange = this.handleCalendarChange.bind(this);
//     }
  
//     componentDidMount() {
//       get("http://localhost:5001/allRentals/")
//         .then((resp) => {
//           console.log(resp.data);
//           let rentalData = resp.data[0].rental;
  
//           this.setState({ rentalData });
//         })
//         .catch((err) => {
//           console.log(err.message);
//         });
//     }
  
    
  
//     handleCalendarChange(didItChange) {
//       post("http://localhost:5001/allRentals/")
//         .then((resp) => {
//           console.log(resp);
//           let rentalData = resp.data[0].rental;
//           this.setState({
//             rental: rentalData,
//           });
//         })
//         .catch((err) => {
//           console.log(err.message);
//         });
//     }
  
//     render() {
//       return (
//         <div>
//           <div className="accordion" id="trip">
//             {this.state.rental.map((rental) => {
//               console.log(rental);
//               return (
//                 <div className="card">
//                   <div
//                     className="card-header"
//                     id={rental._id}
                   
//                   >
//                     <h2 className="mb-0">
//                       <button className="btn btn-link" type="button">
//                         {rental.title}
//                       </button>
//                     </h2>
//                   </div>
//                   {this.state.show && (
//                     <div id="a-rental">
//                       <div className="card-body">
//                         Peple: {rental.users} <br />
//                         rental Start: <Clock deadline={rental.start} /> <br />
//                         Description: {rental.description}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
  
//         </div>
//       );
//     }
//   }
  
//   export default Reservations;






