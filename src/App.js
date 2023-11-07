import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Result from "./components/Result";
function App() {
  const [input, setInput] = useState(
    {
      initialInvestment: 1000,
      annualInvestment: 100,
      duration: 2,
      expectedReturns: 5,
    },
  );
  return (
    <div className="app min-h-full ">
      <Navbar/>
      <Hero input={input} setInput={setInput}/>
      <Main data={input}/>
      <Result input={input}/>
    </div>
  );
}

export default App;
