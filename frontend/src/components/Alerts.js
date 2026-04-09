import React from "react";

function getPriority(sys) {
  if (sys.cpu > 90 || sys.memory > 90 || sys.disk > 90)
    return "HIGH";
  if (sys.cpu > 70 || sys.memory > 70 || sys.disk > 70)
    return "MEDIUM";
  return "LOW";
}

function Alerts({ systems }) {
  return (
    <div>
      <h2>Alerts</h2>
      {systems.map((sys, i) => {
        if (getPriority(sys) !== "LOW") {
          return (
            <p key={i}>
              ⚠ {getPriority(sys)} Alert on {sys.name}
            </p>
          );
        }
        return null;
      })}
    </div>
  );
}

export default Alerts;