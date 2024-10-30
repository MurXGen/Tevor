// frontend/src/App.js
import React from "react";
import Register from "./components/Register";
// Import other components as needed

function App() {
  return (
    <div className="App">
      <h1>Tevor Authentication</h1>
      <Register />
      {/* Add Login, ForgotPassword, ResetPassword as needed */}
    </div>
  );
}

export default App;
