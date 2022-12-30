import React from "react";


function ErrorAlert({ error }) {
  return (
    error && (
        <div>
            <h3>Error: {error.message}</h3>
        </div>
    )
  );
}

export default ErrorAlert;