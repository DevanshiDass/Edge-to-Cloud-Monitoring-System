import { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(LineElement, PointElement, CategoryScale, LinearScale);

function App() {
  const [values, setValues] = useState([]);
  const [labels, setLabels] = useState([]);

  const loadData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/data/latest");
      const reversed = res.data.reverse();

      setValues(reversed.map(d => d.value));
      setLabels(reversed.map(d => new Date(d.timestamp).toLocaleTimeString()));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 2000);
    return () => clearInterval(interval);
  }, []);

  const data = {
    labels,
    datasets: [
      {
        label: "Sensor Value",
        data: values,
        borderColor: "cyan",
        backgroundColor: "cyan",
      },
    ],
  };

  return (
    <div style={{ background: "#111", color: "white", height: "100vh", padding: 20 }}>
      <h1>📡 IoT Live Sensor Dashboard</h1>
      <Line data={data} />
    </div>
  );
}

export default App;
