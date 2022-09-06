import { useState, useEffect } from "react";
import axios from "axios";
import Advice from "./Advice";

function App() {
  const [click, setClick] = useState(true);
  const [advice, setAdvice] = useState({});

  async function getAdvice() {
    try {
      const response = await axios.get("https://api.adviceslip.com/advice");
      console.log("res", response.data);
      setAdvice(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getAdvice();
  }, [click]);

  return (
    <div className="h-full flex items-center justify-center">
      <Advice advice={advice} setClick={setClick} />
    </div>
  );
}

export default App;
