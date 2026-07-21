import { useState } from "react";

function MechanicProfile() {

  const [profile, setProfile] = useState({
    name: "",
    company: "",
    phone: "",
    services: "",
    radius: "",
  });


  function handleChange(e) {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  }


  return (
    <div className="mechanic-profile">

      <h1>🔧 Mechanic Profile</h1>

      <input
        name="name"
        placeholder="Mechanic Name"
        value={profile.name}
        onChange={handleChange}
      />

      <input
        name="company"
        placeholder="Company Name"
        value={profile.company}
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone Number"
        value={profile.phone}
        onChange={handleChange}
      />

      <input
        name="services"
        placeholder="Services Offered"
        value={profile.services}
        onChange={handleChange}
      />

      <input
        name="radius"
        placeholder="Service Radius"
        value={profile.radius}
        onChange={handleChange}
      />

    </div>
  );
}

export default MechanicProfile;
