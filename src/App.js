import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/Character";

// const dummyData = {
//   name: "name",
//   gender: "male",
//   height: "number",
//   mass: "number",
//   birth_year: "year",
//   eye_color: "pretty color",
//   hair_color: "color",
//   skin_color: "fair",
// };

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/?format=api")
      .then((res) => {
        // console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {data.map((data, ind) => {
        return <Character key={ind} info={data} />;
      })}
    </div>
  );
};

export default App;
