import React,{useState} from "react";
import TicketForm from "./TicketForm"
import TheTicket from "./TheTicket"
import "./App.css"

function App(){
  const [userData,SetData]=useState({})
  const addData=(fname,lname,tier)=>{
    SetData({first_name:fname,last_name:lname,tier:tier,id:Date.now()})
  }

  return(
    <div className="app">
        <h1>SIMPLE TICKET GENERATOR WITH REACTJS</h1>
        <div className="container">
          <TheTicket data={userData}/>
          <TicketForm add={addData}/>
        </div>
        
    </div>
  )
}

export default App