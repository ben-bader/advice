import  { useState, useEffect } from "react";
import './App.css'

const App =  () => {
  const [advice, setAdvice] = useState("");
  const [error, setError] = useState(false);

  // Function to fetch random advice
  const fetchAdvice = async () => {
    setError(false); // Reset error before fetch
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      
      const data = await response.json();
      setAdvice(data.slip.advice); // Access the advice text
    } catch (error) {
      console.error("Error fetching advice:", error);
      setError(true);
    }
  };

  // Fetch advice on initial render
  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <div className="container">
        <div className="quote__generator">
          <div className="gen__heading">
            <h1>Advice Generator</h1>
            <h4>Random Generated Advices</h4>
          </div>
          <div className="gen__quotes">
            <p>{advice}</p>
          </div>
          <button className="gen__btn" onClick={fetchAdvice} ><p>Get  An Advice</p></button>
        </div>
    </div>
  );
};

export default App;
