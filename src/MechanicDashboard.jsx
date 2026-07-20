function MechanicDashboard({ request }) {

  return (
    <div>

      <h1>🔧 Mechanic Dashboard</h1>


      {!request ? (

        <p>No customer requests available.</p>

      ) : (

        <>
          <h2>New Job Request</h2>

          <p>
            Customer: {request.name}
          </p>

          <p>
            Phone: {request.phone}
          </p>

          <p>
            Address: {request.address}
          </p>

          <p>
            Vehicle: {request.year} {request.make}
          </p>

          <p>
            Issue: {request.issue}
          </p>

          <p>
            Priority: {request.priority}
          </p>

          <p>
            Location: {request.location}
          </p>


          <button>
            Accept Job
          </button>

        </>

      )}

    </div>
  );
}

export default MechanicDashboard;