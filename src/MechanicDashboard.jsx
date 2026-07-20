import { useState } from "react";

function MechanicDashboard({ request }) {

  const [status, setStatus] = useState("New");


  function acceptJob() {
    setStatus("Accepted");
  }


  function openMap() {
    const address = request.address;

    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
      "_blank"
    );
  }


  return (
    <div className="mechanic-dashboard">

      <h1>🔧 Mechanic Dashboard</h1>


      {!request ? (

        <>
          <h2>No Jobs Available</h2>
          <p>New customer requests will appear here.</p>
        </>

      ) : (

        <div className="job-card">

          <h2>🚨 Service Request</h2>

          <h3>Status: {status}</h3>

          <hr />


          <h3>Customer</h3>

          <p>Name: {request.name}</p>

          <p>Phone: {request.phone}</p>

          <p>Address: {request.address}</p>


          <button onClick={openMap}>
            📍 View Location
          </button>


          <h3>Vehicle</h3>

          <p>
            🚗 {request.year} {request.make}
          </p>


          <h3>Problem</h3>

          <p>
            ⚠️ {request.issue}
          </p>


          <h3>Priority</h3>

          <p>
            🔥 {request.priority}
          </p>


          {status === "New" && (

            <button onClick={acceptJob}>
              ✅ Accept Job
            </button>

          )}


          {status === "Accepted" && (

            <p>
              🎉 Job accepted. Contact customer.
            </p>

          )}


        </div>

      )}

    </div>
  );
}

export default MechanicDashboard;