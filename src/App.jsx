// import React from "react";
// import { useState } from "react"


// const App = () =>{ 
//   const [wts, setWts] = useState([])
//   const [inpValue, setInpValue] = useState("")
//   const getBooks = async(e)=>{
//   const inp = inpValue
//   try{
//     const resp = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${inp.value}&key=AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU`)
//     const data  = await resp.json()
//     console.log(data)
//     setWts(wts => [...wts, data])
//         console.log(wts);
//         } catch(error){
//             console.log(error);
        
//   }}
//   return ( 
//     <div> 
//       <input type="value" name="inp" onChange={(e)=>{setInpValue(e.target.value)}}  />
//       <button onClick={()=> getBooks()}>search</button>
//       {wts.map(item => (
            
//             <div className="conts"><div className="block"><img src={item.volumeInfo.imageLinks.thumbnail}/><br/></div></div>
//         ))}
//     </div> 
   
//   ); 
// } 
 
// export default App;
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import React from "react";
import Registr from './components/Registr/Registr';
import './styles/style.css'
import Login from './components/Login/Login';
import Chikalox from './components/Chikalox/Chikalox';
import Header from './Header/Header';

const App = ()=>{
  return(
    <>
    <BrowserRouter>
    <Header></Header>
    <Routes>

    
      <Route path='/' element={<Registr/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='Chikalox' element={<Chikalox/>}/>
      <Route/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;

