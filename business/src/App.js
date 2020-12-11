import axios from "axios";
import React, { useState, useEffect } from "react";
import { companyURL, commentURL, config } from "./services";
import './App.css';
import { Route } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import Changemode from "./components/Changemode";

function App() {

  const [company, setCompany] = useState([]);
  const [comments, setComments] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  
  useEffect(() => {
    const getCompany = async () => {
      const companyResponse = await axios.get(companyURL, config);
      setCompany(companyResponse.data.records);
      const commentResponse = await axios.get(commentURL, config);
      setComments(commentResponse.data.records);
    };
    getCompany();
  }, [toggleFetch])

  console.log(comments)
  
  return (
    <div className={"App"} > 
      <h1>Business Revenues</h1>
        <Route exact path="/"> 
          <Nav company={company}/>
        </Route> 
      <Route path="/company/:id">
        <Homepage company={company} comments={comments} setToggleFetch={setToggleFetch}/>
      </Route>
      <Changemode />
    </div>
  );
}

export default App;
