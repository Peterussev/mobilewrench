function MechanicDashboard({ request }) {

  return (
    <div className="mechanic-dashboard">

      <h1>🔧 Mechanic Dashboard</h1>

      {!request ? (

        <div>
          <h2>No Jobs Available</h2>
          <p>New customer requests will appear here.</p>
        </div>

      ) : (

        <div className="job-card">

          <h2>🚨 New Service Request</h2>

          <hr />

          <h3>Customer Information</h3>

          <p>
            <strong>Name:</strong> {request.name}
          </p>

          <p>
            <strong>Phone:</strong> {request.phone}
          </p>

          <p>
            <strong>Address:</strong> {request.address}
          </p>


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


          <h3>Location</h3>

          <p>
            📍 {request.location}
          </p>


          <button>
            ✅ Accept Job
          </button>

        </div>

      )}

    </div>
  );
}

export default MechanicDashboard;