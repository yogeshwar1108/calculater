import { useState } from "react";

export default function Calculater() {
  let [input, setInput] = useState("");
  let [result, setResult] = useState("");
  let Change = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="text-center my-5 mx-5 bg-secondary ">
    <div >
      <input className="bg bg-info mt-4" name="input" value={input} onChange={Change} />
      <br />
      <button className="btn btn-danger btn-sm p-2 m-2" onClick={() => setInput("")}>AC</button>
      <button className="btn btn-success btn-sm p-2" onClick={() => setResult(eval(input))}>Result</button>
      <h4>Result is : {result}</h4>
      {/*deceler buttons */}
      <div>
      <button className="btn btn-outline-light btn-group m-1"onClick={() => setInput(input + 1)}>1</button>
      <button  className="btn btn-outline-light btn-group m-1" onClick={() => setInput(input + 2)}>2</button>
      <button  className="btn btn-outline-light btn-group m-1" onClick={() => setInput(input + 3)}>3</button>
      <button  className="btn btn-outline-light btn-group m-1"onClick={() => setInput(input+'/')}>/</button>
      <br />
      
      <button  className="btn btn-outline-light btn-group m-1" onClick={() => setInput(input + 4)}>4</button>
      <button  className="btn btn-outline-light btn-group m-1" onClick={() => setInput(input + 5)}>5</button>
      <button  className="btn btn-outline-light btn-group m-1" onClick={() => setInput(input + 6)}>6</button>
      <button  className="btn btn-outline-light btn-group m-1" onClick={() => setInput(input + "-")}>-</button>
     
      <br />
      <button  className="btn btn-outline-light btn-group m-1" onClick={() => setInput(input + 7)}>7</button>
      <button  className="btn btn-outline-light btn-group m-1"onClick={() => setInput(input + 8)}>8</button>
      <button  className="btn btn-outline-light btn-group m-1"onClick={() => setInput(input + 9)}>9</button>
      <button  className="btn btn-outline-light btn-group m-1"onClick={() => setInput(input + "+")}>+</button>
  
      <br />
      <button className="btn btn-outline-light btn-group m-1" onClick={() => setInput(input + ".")}>.</button>
      <button  className="btn btn-outline-light btn-group m-1"onClick={() => setInput(input + 0)}>0</button>
      <button  className="btn btn-outline-light btn-group m-1"onClick={() => setInput(input + "*")}>*</button>
      <button className="btn btn-outline-light btn-group m-1" onClick={() => setInput(input + "%")}>%</button>
    </div>
    </div>
    </div>
  );
}
