import React from "react";
import axios from "axios";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Modal, Button } from "react-bootstrap";
import Clock from "./Clock";
import moment from "moment";

import RentalForm from "./FormModal";
import RentalCard from "./RentalCard";
import { get, post } from "../authService/authService";
import { useNavigate } from "react-router-dom";
import { useParams, Link  } from "react-router-dom";

const times = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
    "04:30 PM",
    "05:00 PM",
    "05:30 PM",
    "06:00 PM",
    "06:30 PM",
    "07:00 PM",
    "07:30 PM",
    "08:00 PM",
    "08:30 PM",
    "09:00 PM",
    "09:30 PM",
    "10:00 PM",
    "10:30 PM",
    "11:00 PM",
    "11:30 PM",
  ]

  export default function Reservations() {
    const [data, setData] = React.useState({});
    const [loaded,setLoaded] = React.useState(false)
    const [openDialogue, setOpenDialogue] = React.useState(false);
    const [deleteId, setDeleteId] = React.useState("");
    const [error, setError] = React.useState(false);

    const [refresh, setRefresh] = React.useState(false);
   
    React.useEffect(() => {
        get("/rental/allRentals")
        // Reservations.user()
        .then((status) => {
            console.log("return !!!!!", status)
        //   if (status.success) {
              
        //     setData(status.results);
        //     setLoaded(true)
        //   }
        .catch((err) => {
            console.log(err.message)
        })
         });
      }, []);

      const navigate = useNavigate();
      const params  = useParams(); 

      const deleteReservation =  () => {
        Reservations.deleteReservation(deleteId).then((status) => {
    console.log("return",status)
  if (status.success) {
      setOpenDialogue(false)
      setRefresh(!refresh)
  }
 });
      }

      const openDeleteDialogue = (id) => {
        console.log(id)
        setDeleteId(id)
      }
      return loaded ? (
        <div>
        <h1> </h1>
    <form> 
    <section class="py-8">
      <div>
      <div>
            <div>
              <span>Username: {data[0].user.username}</span>
              <h3>Your Reservations</h3>
            </div>
    
            <Link to={`/search`} class="hidden lg:block text-right w-1/2"><a class="inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-blue-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200" href="#">
            Make new reservation</a></Link>
          </div>
        <div>
        {data.map(each => 
          <div>
            <div>
              <div>
                {/* <img src={each.info.photo.images.medium.url} alt=""/> */}
                <span>{each.field.price}</span>
              </div>
              <div>
                <div>
                  <h3>{each.field.username}</h3>
                  <span>{each.field.username}</span>
                </div>
               
              </div>
              <div >
                <h4 >Date</h4>
                <span>{each.reservation.date}</span>
              </div>
              <div >
                <h4 >Time</h4>
                <span >{each.reservation.time}</span>
              </div>
              <div>
                <h4 > PLayers </h4>
                <span>{each.reservation.players}</span>
              </div>
              <div>
               
                <a onClick={() => openDeleteDialogue(each.reservation._id)} class="" href="#">Delete Reservation </a>
              </div>
            </div>
          </div>
        )}
          
        </div>
      </div>
    </section>
    </form>
        </div>
    
      ) : <></>
    }