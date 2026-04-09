import React from "react";

function Alerts({ systems }) {
  const alerts = systems.filter(s => s.alert !== "LOW");

  return (
    <div>
      <h2>Alerts</h2>
      {alerts.length === 0 ? (
        <p>No alerts 🚀</p>
      ) : (
        alerts.map(s => (
          <p key={s.id}>
            ⚠ {s.alert} Alert on {s.name}
          </p>
        ))
      )}
    </div>
  );
}

export default Alerts;