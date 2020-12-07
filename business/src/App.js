import axios from "axios";
import React, { useState, useEffect } from "react";
import { baseURL, config } from "./services";
import './App.css';
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";

function App() {

  const [company, setCompany] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  
  useEffect(() => {
    const getCompany = async () => {
      const response = await axios.get(baseURL, config);
      setCompany(response.data.records);
      console.log(response)
    };
    getCompany();
  }, [toggleFetch])

  return (
    <div className="App">
      <h1>Business Revenues</h1>
      {/* <Route exact path="/">   */}
        <Nav company={company}/>
      {/* </Route> */}
      <Route path="/company/:id">
        <Homepage company={company} setToggleFetch={setToggleFetch}/>
      </Route>
    </div>
  );
}

export default App;
