function App() {
  return (
    <div className="app">
      <h1>🔧 MobileWrench</h1>
      <h2>Request a Mobile Mechanic</h2>

      <form>
        <label>
          Your Name
          <input type="text" placeholder="Enter your name" />
        </label>

        <label>
          Phone Number
          <input type="text" placeholder="Enter phone number" />
        </label>

        <label>
          Vehicle Year
          <input type="text" placeholder="Example: 2018" />
        </label>

        <label>
          Vehicle Make
          <select>
            <option>Select Make</option>
            <option>Ford</option>
            <option>Chevrolet</option>
            <option>Toyota</option>
            <option>Honda</option>
            <option>Dodge</option>
          </select>
        </label>

        <label>
          Problem
          <select>
            <option>Select Issue</option>
            <option>Won't Start</option>
            <option>Overheating</option>
            <option>Brake Problem</option>
            <option>Battery Issue</option>
            <option>Check Engine Light</option>
          </select>
        </label>

        <label>
          Priority Level
          <select>
            <option>Normal</option>
            <option>Urgent</option>
            <option>Emergency</option>
          </select>
        </label>

        <button type="submit">
          Find a Mechanic
        </button>
      </form>
    </div>
  );
}

export default App;