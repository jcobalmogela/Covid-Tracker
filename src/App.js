import React from "react";


//css
import "./global.css"
//component
import Navbars from "./Component/Navbar";

//page
import Homepage from "./Pages/Homepage";



function App() {

  return (
    <div className="App">
        <Navbars></Navbars>
        <Homepage></Homepage>
    </div>
  );
}

export default App;
