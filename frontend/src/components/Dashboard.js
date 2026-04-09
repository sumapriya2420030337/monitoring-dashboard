import React, { useEffect, useState } from "react";
import axios from "axios";
import SystemCard from "./SystemCard";
import Alerts from "./Alerts";
import Charts from "./Charts";
import "./Dashboard.css";

const BACKEND = "https://monitoring-dashboard-bzqh.onrender.com";

function Dashboard() {
  const [systems, setSystems] = useState([]);
  const [history, setHistory] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get(`${BACKEND}/systems`);
      setSystems(res.data);

      setHistory(prev => [
        ...prev,
        {
          time: new Date().toLocaleTimeString(),
          data: res.data
        }
      ].slice(-10));

    } catch (err) {
      console.error("ERROR:", err);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <h1>System Monitoring Dashboard</h1>

      <div className="cards">
        {systems.map(system => (
          <SystemCard key={system.id} system={system} />
        ))}
      </div>

      <Alerts systems={systems} />

      <Charts history={history} />
    </div>
  );
}

export default Dashboard;
