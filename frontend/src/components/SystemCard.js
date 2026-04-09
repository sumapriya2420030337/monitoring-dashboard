import React from "react";

function SystemCard({ system }) {
  return (
    <div className="card">
      <h3>{system.name}</h3>
      <p>CPU: {system.cpu}%</p>
      <p>Memory: {system.memory}%</p>
      <p>Disk: {system.disk}%</p>
      <p>Health: {system.health}</p>
      <p>Alert: {system.alert}</p>
    </div>
  );
}

export default SystemCard;