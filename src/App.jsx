import { useState } from "react";
import CustomerRequest from "./Customerrequest";
import MechanicDashboard from "./MechanicDashboard";

function App() {
  const [role, setRole] = useState("");
  const [request, setRequest] = useState(null);

  return (
    <div className="app">

      {!role && (
        <>
          <h1>🔧 MobileWrench</h1>
          <h2>On-Demand Mobile Mechanics</h2>

          <button onClick={() => setRole("customer")}>
            🚗 I Need a Mechanic
          </button>

          <br /><br />

          <button onClick={() => setRole("mechanic")}>
            🔧 I Am a Mechanic
          </button>
        </>
      )}

      {role === "customer" && (
        <>
          <CustomerRequest setRequest={setRequest} />

          <button onClick={() => setRole("")}>
            Back
          </button>
        </>
      )}

      {role === "mechanic" && (
        <>
          <MechanicDashboard request={request} />

          <button onClick={() => setRole("")}>
            Back
          </button>
        </>
      )}

    </div>
  );
}

export default App;