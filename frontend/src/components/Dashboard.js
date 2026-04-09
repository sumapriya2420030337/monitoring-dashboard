import React, { useEffect, useState } from "react";
import axios from "axios";
import SystemCard from "./SystemCard";
import Alerts from "./Alerts";
import Charts from "./Charts";
import "./dashboard.css";

const BACKEND = "https://monitoring-dashboard-bzqh.onrender.com";

function Dashboard() {
  const [systems, setSystems] = useState([]);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const sys = await axios.get(`${BACKEND}/systems`);
      const hist = await axios.get(`${BACKEND}/history`);

      setSystems(sys.data);
      setHistory(hist.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
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

      {loading && <p>Loading...</p>}

      <div className="cards">
        {systems.map((sys, i) => (
          <SystemCard key={i} system={sys} />
        ))}
      </div>

      <Alerts systems={systems} />
      <Charts history={history} />
    </div>
  );
}

export default Dashboard;