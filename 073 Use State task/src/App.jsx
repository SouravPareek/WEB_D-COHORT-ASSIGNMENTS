import { useState } from "react";
import "./App.css";
import Washroom from "./components/wash";

function App() {
  const [Gender, setGender] = useState("Male");

  const changeGender = function () {
    if (Gender == "Male") {
      setGender("Female");
    } else if (Gender == "Female") {
      setGender("Other");
    } else {
      setGender("Male");
    }
  };

  return (
    <div>
      <h1>Your Gender is ~ {Gender}</h1>
      <button className="btn" onClick={changeGender}>
        Change Gender
      </button>
      <Washroom user={Gender}/>
    </div>
  );
}

export default App;
