import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BookDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function readItem() {
      try {
        const res = await axios.get(`http://localhost:3001/books/${id}`);
        setItem(res.data);
      } catch (error) {
        console.log(error);
      }
    }

    readItem();
  }, [id]);

  if (!item) return <div>Loading...</div>;

  return(
    <div>
        <img src={item.image} alt="" />
        <h1>{item.title}</h1>
    </div>
  )
}
