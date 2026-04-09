import React, { useEffect, useState } from "react";
import axios from "axios";
import SystemCard from "./SystemCard";
import Alerts from "./Alerts";
import "./Dashboard.css";

const BACKEND = "https://monitoring-dashboard-bzqh.onrender.com";

function Dashboard() {
  const [systems, setSystems] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${BACKEND}/systems`);
      setSystems(res.data);
    } catch (err) {
      console.error("ERROR:", err);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <h1>System Monitoring Dashboard</h1>

      <div className="cards">
        {systems.map((sys, i) => (
          <SystemCard key={i} system={sys} />
        ))}
      </div>

      <Alerts systems={systems} />
    </div>
  );
}

export default Dashboard;