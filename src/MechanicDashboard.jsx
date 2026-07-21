import { useState } from "react";

function MechanicDashboard({ jobs }) {

  const [jobList, setJobList] = useState(jobs);


  function acceptJob(id) {

    const updatedJobs = jobList.map((job) => {

      if (job.id === id) {

        return {
          ...job,
          status: "Accepted",
        };

      }

      return job;

    });


    setJobList(updatedJobs);

  }



  function openMap(address) {

    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
      "_blank"
    );

  }



  return (

    <div className="mechanic-dashboard">


      <h1>🔧 Mechanic Dashboard</h1>


      {jobList.length === 0 ? (

        <>

          <h2>No Jobs Available</h2>

          <p>
            New customer requests will appear here.
          </p>

        </>

      ) : (


        jobList.map((job) => (


          <div
            className="job-card"
            key={job.id}
          >


            <h2>
              🚨 Service Request
            </h2>


            <h3>
              Status: {job.status}
            </h3>



            <hr />



            <h3>
              Customer
            </h3>

            <p>
              Name: {job.name}
            </p>

            <p>
              Phone: {job.phone}
            </p>

            <p>
              Address: {job.address}
            </p>



            <button
              onClick={() => openMap(job.address)}
            >
              📍 View Location
            </button>



            <h3>
              Vehicle
            </h3>


            <p>
              🚗 {job.year} {job.make} {job.model}
            </p>



            <h3>
              Problem
            </h3>


            <p>
              ⚠️ {job.issue}
            </p>



            <h3>
              Priority
            </h3>


            <p>
              🔥 {job.priority}
            </p>




            {job.status === "New" && (

              <button
                onClick={() => acceptJob(job.id)}
              >
                ✅ Accept Job
              </button>

            )}



            {job.status === "Accepted" && (

              <p>
                🎉 Job accepted. Contact customer.
              </p>

            )}



          </div>


        ))

      )}


    </div>

  );

}


export default MechanicDashboard;