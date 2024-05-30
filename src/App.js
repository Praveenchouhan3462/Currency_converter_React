import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { useCallback, useEffect, useRef, useState } from 'react';
import Card from './component/Card';


function App() {
  const [amt,setamt]=useState(1);
    const [cur,setcur]=useState('usd');
    const [to,setto]=useState(null);
    const [tocur,settocur]=useState('inr');
    const [final,setfinal]=useState(null);

  const [res,setres]=useState([])
  
  const fetchdata= async()=>{
    let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${cur}.json`;
    let data= await fetch(url);
    data=await data.json();
    setres(data[cur])
    console.log(res);
   setfinal(amt*res[tocur])
  //  console.log(cur)
  //  console.log(tocur)
  //  console.log(amt)
  //  console.log(final)
  };
 
  return (
    <div>
      <h1 style={{textAlign:'center'}}>Currency Converter</h1>
      <div style={{width:'50%',height:'50%', backgroundColor:'olive', padding:'60px', marginLeft:'250px', marginTop:'50px'}}>
            <Card label="From" amt={amt} amtch={(e)=>{setamt(e.target.value)}} cur={cur} curch={(e)=>{setcur(e.target.value)}}/><br/><br/>
            <Card label="To" amt={final} cur={tocur} curch={(e)=>{settocur(e.target.value)}} />
            <button onClick={fetchdata} style={{borderRadius:'5px',backgroundColor:'blue',marginTop:'20px',fontSize:'40px',marginLeft:'230px'}}> Exchange</button>
      </div>
     
    </div>
  );
}

export default App;
