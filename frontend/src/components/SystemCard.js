import React from "react";

function getHealth(cpu, memory, disk) {
  const score = 100 - (cpu + memory + disk) / 3;

  if (score > 70) return "Good";
  if (score > 40) return "Moderate";
  return "Critical";
}

function SystemCard({ system }) {
  return (
    <div className="card">
      <h3>{system.name}</h3>
      <p>CPU: {system.cpu}%</p>
      <p>Memory: {system.memory}%</p>
      <p>Disk: {system.disk}%</p>
      <p>Status: {system.status}</p>
      <p>Health: {getHealth(system.cpu, system.memory, system.disk)}</p>
    </div>
  );
}

export default SystemCard;