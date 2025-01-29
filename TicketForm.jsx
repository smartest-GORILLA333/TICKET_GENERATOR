import React,{useState} from "react";

function TicketForm(props){
    const [fname,Setfname]=useState("")
    const [lname,Setlname]=useState("")
    const [tier,Settier]=useState("")
    const submit=(e)=>{
        e.preventDefault(); 
        if (fname.trim() !="" && lname.trim() !="" && tier.trim() !=""){
            props.add(fname,lname,tier)
        }
        else{
            alert("please fill the whole form")
        }
    }
    return(
        <div className="theform">
            <form onSubmit={submit}>
                 <label >
                First Name :
                <input type="text" value={fname} onChange={(e)=>Setfname(e.target.value)} />
            </label>
            <label >
                Last Name :
                <input type="text" value={lname} onChange={(e)=>Setlname(e.target.value)} />
            </label>
            <label >
                Tier :
                <select name="tierselect" id="tierselect" onChange={(e)=>Settier(e.target.value)}>
                    <option value="STANDARD">STANDARD</option>
                    <option value="GOLD">GOLD</option>
                    <option value="PLATENIUM">PLATENIUM</option>
                </select>
            </label>
            <button type="submit">GENERATE</button>
            </form>
           
        </div>
    )
}



export default TicketForm