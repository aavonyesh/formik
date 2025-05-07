import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BasketContext } from "../context/BasketProvider";
import Basket from "./Basket";
function Book() {
  const [data, setData] = useState([]);
  const URL = "http://localhost:3000/books";
  async function readData() {
    try {
      const res = await axios.get(URL);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    readData();
  }, []);
  const {basket,addBasket} = useContext(BasketContext)
  console.log(basket)
  return (
      <div style={{display:"flex",flexWrap:"wrap",width:"80%",justifyContent:"center",alignItems:"center",margin:"auto",gap:"20px"}}>
        <h4>Basket: {basket.length}</h4>
          <Link to="/addbook"><button style={{backgroundColor:"grey", width:"100px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px",border:"none"}}>Add Book</button></Link>
      {data.map((item) => (
          <div key={item.id} style={{width:"300px", border:"2px solid grey",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",margin:"auto"}}>
          <img src={item.image} alt="" style={{ width: "200px",border:"2px solid grey"}} />
          <h2 style={{fontSize:"28px"}}>{item.title}</h2>
          <p style={{fontSize:"20px"}}>{item.author}</p>
          <p style={{fontSize:"18px"}}>{item.description}</p>
          <p style={{backgroundColor:"grey", width:"50px",height:"30px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px"}}>{item.price}</p>
          {/* <Link to={`/detail/${item.id}`}><button style={{backgroundColor:"grey", width:"50px",height:"30px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px",border:"none"}}>info</button></Link> */}
          <Link to={"/basket"}><button style={{backgroundColor:"purple", width:"100px",height:"50px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"18px",border:"none",color:"white"}} onClick={()=>addBasket(item)}>Add basket</button></Link>
        </div>
      ))}
    </div>
  );
}

export default Book;
