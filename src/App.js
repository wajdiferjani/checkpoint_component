import React from 'react';
import './App.css';
import Address from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";
import ProfilPhoto from "./Component/Profile/ProfilPhoto";

function App() {
  return (
    <React.Fragment>
           <ProfilPhoto/>
           <FullName/>
           <Address/>

    </React.Fragment>
    
  );
}

export default App;
