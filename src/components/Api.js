import React from "react";
import axios from "axios";

const Api = () => {
  
  const [calendar, setCalendar] = React.useState("");

  React.useEffect(() => {
    getCalendar();
  
  }, []); 

  const getCalendar = () => {
    axios
      .get("814450829919-gvl1d2venq1u375jjpiq8keasi8i34f8.apps.googleusercontent.com")
      .then((results) => setCalendar(results.data.fact))
      .catch((err) => console.log(err.message));
  };


  return (
    <div>
      <h2>This is API</h2>
      <p>{calendar}</p>

      <button onClick={getCalendar}> Calendar </button>
     
      <p>{calendar}</p>
      <label>Name</label>
      {/* <input value={input} onChange={(e) => setInput(e.target.value)} /> */}
    </div>
  );
};

export default Api;