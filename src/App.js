import React,{Fragment} from "react";
import './App.css';


import Inputodo from "./components/Inputodo";
import { Listtodo } from "./components/listtodo";

function App() {
  return (
  <Fragment>
    <div className="container">
    <Inputodo/>
    <Listtodo/>
    </div>
    
  </Fragment>
  );
}

export default App;
