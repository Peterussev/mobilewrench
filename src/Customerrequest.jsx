import { useState } from "react";

function CustomerRequest() {
  const [submitted, setSubmitted] = useState(false);
  const [location, setLocation] = useState("");

  const [request, setRequest] = useState({
    name: "",
    phone: "",
    address: "",
    year: "",
    make: "",
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
      alert("GPS is not supported on this device");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(
          `Latitude: ${position.coords.latitude.toFixed(5)}, Longitude: ${position.coords.longitude.toFixed(5)}`
        );
      },
      () => {
        alert("Unable to get your location");
      }
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      {!submitted ? (
        <>
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
              placeholder="Your Address"
              value={request.address}
              onChange={handleChange}
            />

            <button type="button" onClick={getLocation}>
              📍 Use My Location
            </button>

            {location && <p>{location}</p>}

            <input
              name="year"
              placeholder="Vehicle Year"
              value={request.year}
              onChange={handleChange}
            />

            <select name="make" onChange={handleChange}>
              <option value="">Select Vehicle Make</option>
              <option>Ford</option>
              <option>Chevrolet</option>
              <option>Toyota</option>
              <option>Honda</option>
              <option>Dodge</option>
            </select>

            <select name="issue" onChange={handleChange}>
              <option value="">Select Problem</option>
              <option>Won't Start</option>
              <option>Overheating</option>
              <option>Brake Problem</option>
              <option>Battery Issue</option>
              <option>Check Engine Light</option>
            </select>

            <select name="priority" onChange={handleChange}>
              <option value="">Priority Level</option>
              <option>Normal</option>
              <option>Urgent</option>
              <option>Emergency</option>
            </select>

            <button type="submit">
              Find a Mechanic
            </button>

          </form>
        </>
      ) : (
        <>
          <h2>✅ Request Submitted</h2>

          <p>Name: {request.name}</p>
          <p>Address: {request.address}</p>
          <p>{location}</p>
          <p>
            Vehicle: {request.year} {request.make}
          </p>
          <p>Problem: {request.issue}</p>
          <p>Priority: {request.priority}</p>

          <button onClick={() => setSubmitted(false)}>
            New Request
          </button>
        </>
      )}
    </div>
  );
}

export default CustomerRequest;