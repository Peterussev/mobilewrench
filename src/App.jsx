import { useState } from "react";
import CustomerRequest from "./Customerrequest";
import MechanicDashboard from "./MechanicDashboard";

function App() {

  const [page, setPage] = useState("home");

  const [jobs, setJobs] = useState([]);


  function addJob(newJob) {

    const job = {
      id: Date.now(),
      status: "New",
      ...newJob,
    };

    setJobs([
      ...jobs,
      job
    ]);

  }


  return (

    <div className="app">


      {page === "home" && (

        <>

          <h1>🔧 MobileWrench</h1>

          <h2>
            On-Demand Mobile Mechanics
          </h2>


          <button onClick={() => setPage("customer")}>
            🚗 I Need a Mechanic
          </button>


          <br />
          <br />


          <button onClick={() => setPage("mechanic")}>
            🔧 I Am a Mechanic
          </button>


        </>

      )}



      {page === "customer" && (

        <>

          <CustomerRequest
            addJob={addJob}
          />


          <br />


          <button onClick={() => setPage("home")}>
            Back
          </button>


        </>

      )}



      {page === "mechanic" && (

        <>

          <MechanicDashboard
            jobs={jobs}
          />


          <br />


          <button onClick={() => setPage("home")}>
            Back
          </button>


        </>

      )}


    </div>

  );

}


export default App;