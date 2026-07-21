import { useState } from "react";

function CustomerRequest({ addJob }) {

  const [submitted, setSubmitted] = useState(false);

  const [location, setLocation] = useState("");

  const [request, setRequest] = useState({
    name: "",
    phone: "",
    address: "",
    year: "",
    make: "",
    model: "",
    issue: "",
    priority: "",
  });


  function handleChange(e) {

    setRequest({
      ...request,
      [e.target.name]: e.target.value,
    });

  }


  function getLocation() {

    if (!navigator.geolocation) {

      setLocation("GPS not supported");

      return;

    }


    navigator.geolocation.getCurrentPosition(

      (position) => {

        setLocation(
          `Latitude: ${position.coords.latitude.toFixed(5)}, Longitude: ${position.coords.longitude.toFixed(5)}`
        );

      },

      () => {

        setLocation("Location unavailable");

      }

    );

  }


  function handleSubmit(e) {

    e.preventDefault();


    addJob({

      ...request,

      location,

    });


    setSubmitted(true);

  }



  if (submitted) {

    return (

      <div>

        <h1>✅ Request Submitted</h1>

        <p>
          A mechanic can now view your request.
        </p>


        <button onClick={() => setSubmitted(false)}>
          Create Another Request
        </button>


      </div>

    );

  }



  return (

    <div>

      <h1>🚗 Customer Request</h1>


      <form onSubmit={handleSubmit}>


        <input
          name="name"
          placeholder="Your Name"
          value={request.name}
          onChange={handleChange}
        />


        <input
          name="phone"
          placeholder="Phone Number"
          value={request.phone}
          onChange={handleChange}
        />


        <input
          name="address"
          placeholder="Address"
          value={request.address}
          onChange={handleChange}
        />


        <button type="button" onClick={getLocation}>
          📍 Get GPS Location
        </button>


        <p>{location}</p>



        <input
          name="year"
          placeholder="Vehicle Year"
          value={request.year}
          onChange={handleChange}
        />


        <input
          name="make"
          placeholder="Vehicle Make"
          value={request.make}
          onChange={handleChange}
        />


        <input
          name="model"
          placeholder="Vehicle Model"
          value={request.model}
          onChange={handleChange}
        />



        <select
          name="issue"
          value={request.issue}
          onChange={handleChange}
        >

          <option value="">
            Select Problem
          </option>

          <option>
            Won't Start
          </option>

          <option>
            Overheating
          </option>

          <option>
            Brake Problem
          </option>

          <option>
            Battery Issue
          </option>

          <option>
            Check Engine Light
          </option>

        </select>



        <select
          name="priority"
          value={request.priority}
          onChange={handleChange}
        >

          <option value="">
            Select Priority
          </option>

          <option>
            Normal
          </option>

          <option>
            Urgent
          </option>

          <option>
            Emergency
          </option>

        </select>



        <button type="submit">
          Submit Request
        </button>


      </form>


    </div>

  );

}


export default CustomerRequest;