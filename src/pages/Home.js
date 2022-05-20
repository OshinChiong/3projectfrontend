import React from "react";
import { get } from "../authService/authService";
import { useParams, Link  } from "react-router-dom";

const Home = () => {
    React.useEffect(() => {
      let token = localStorage.getItem("authToken");
      console.log("This is the token", token);
      // get("/users/login")
       get("/users/login-test")
        .then((results) => {
          console.log("Are we logged in?", results.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, []);
  
    return (
   
      <div className="home">
      {/* <h1> This is soccer Loco </h1> */}
      <section className="top">
        <div className="container py-5 px-1">
          <div className="main-logo">
          {/* <img 
              src="/download.png"
              alt="logo"
              className="float-center img-responsive"
              style={{width: "500px", height: "200px"}}
            /> */}
            
          </div>
         
          <div
            className="d-sm-flex align-items-center justify-content-between"
            style={{ padding: "100px" }}
          >
            <div>

              <h1>Register. Play. Enjoy.</h1>
              <h3 className="text-info">Ready to play?</h3>
              <br />
              <h4 className="about-text" style={{ lineHeight: "2em" }}>
              {/* <img
              src="/backgroundhome.jpg"
              alt="logo"
              className="float-left img-responsive"
              style={{width: "500px", height: "400px"}}
            /> */}
             <br />
            <p className="texto">  Fields are available for rental from
              <br />
              Mon - Fri: 4pm -12am
              <br />
              Sat - Sun: 9am - 12am
              <br />
              Our rates are $160.00 for small field rentals
              <br />
              Have a question? Call Us (305) 0520-2022</p>
                <br />
               Join to a Game
                <br />
               Tell us in advance what is your time to play and book!
              </h4>
            </div>
          </div>
        </div>
      </section>
      <footer> 
      <div className='footer-links'> 

<Link className="homelink" to="/*" > Contact Us   </Link>
<Link className="homelink" to="/*"> Privacy </Link>

</div>

      </footer>
    

    </div>
    );
    
  };
  
  export default Home;