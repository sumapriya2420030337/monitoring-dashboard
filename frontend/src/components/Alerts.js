import React from "react";

function Alerts({ systems }) {
  return (
    <div>
      <h2>Alerts</h2>

      {systems.map((sys, i) =>
        sys.alert !== "LOW" ? (
          <p key={i}>
            ⚠ {sys.alert} Alert on {sys.name}
          </p>
        ) : null
      )}
    </div>
  );
}

export default Alerts;