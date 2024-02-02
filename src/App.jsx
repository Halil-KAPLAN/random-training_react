import { useEffect, useState } from "react";
import "./App.css";
import Trainings from "./Trainings";
import axios from "axios";
import Loading from "./Loading";

function App() {
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTrainings = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:3004/trainings");
      setTrainings(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrainings();
  }, []);

  return (
    <div className="App">
      {loading ? <Loading /> : <Trainings trainings={trainings} />}
    </div>
  );
}
export default App;
