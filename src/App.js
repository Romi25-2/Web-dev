import React from "react";
import SignupForm from "./SignupForm";
import "./styles.css";

function App() {
  const handleFormSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <div className="app">
      <SignupForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
