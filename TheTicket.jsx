import React,{useState} from "react";
import QRCode from 'react-qr-code';
function TheTicket(props){
    const {data}=props

    if (!data) {
        return <div>Loading ticket...</div>; 
    }
    return(
        <div className="ticket" >
            <div className={data.tier}>
                <h2>YOUR EVENT</h2>
                <h3>31/12/2028</h3>
                <QRCode value={JSON.stringify(data)} />
                <h3>{data.first_name+" "+data.last_name}</h3>
                <h3>TIER : {data.tier}</h3>
            </div>
        </div>
    )
}

export default TheTicket