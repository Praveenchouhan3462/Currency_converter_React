import React from 'react'
import { useState } from 'react';
export default function Card({
  label,amt,amtch,cur,curch,curoptions=['usd','inr','gel','ggp']}
) {

  return (
    <div style={{backgroundColor:'grey',display:'flex',padding:'25px',borderRadius:'20px'}}>
        <div style={{}}>
            <h4>{label}</h4><br />
            <input type="number" onChange={amtch} value={amt}/>
            
        </div>
        <div style={{marginLeft:'200px'}}>
        <h4>Currency Type</h4><br />
            <select value={cur} onChange={curch} >
                {curoptions.map((c)=>(
                    <option key={c} value={c}>{c}</option>
                ))}
            </select>
        </div>
    </div>
  )
}
