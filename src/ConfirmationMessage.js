import React from "react";

function ConfirmationMessage({ name }) {
  return (
    <div className="confirmation">
      <h3>Thank you for signing up, {name || "Member"}!</h3>
      <p>Your membership details have been recorded successfully.</p>
    </div>
  );
}

export default ConfirmationMessage;
