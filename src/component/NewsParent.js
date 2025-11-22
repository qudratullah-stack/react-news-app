import React, { useEffect, useState } from "react";
import NewItem from "./NewItem";
import Spinner from "./Spinner";
export default function NewsParent(props) {
  const [datas, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  
  let Url =  `http://api.mediastack.com/v1/news?access_key=${process.env.REACT_APP_API_KEY}&countries=gb&languages=en&keywords=${props.category}&limit=30`;
  
 useEffect(() => {
  setloading(true);
  fetch(Url)
    .then((response) => response.json())
    .then((data) => {
      console.log("RAW proxy response:", data);
    
      setdata(data.data);
    })
    .catch((err) => {
      console.log("This is the HTTP error", err);
    })
    .finally(() => setloading(false));
}, [props.category]);
  return (
    <>
    <div className="spinner_parent">
      {loading && <Spinner />}

    </div>
     <h1 style={{color: props.mode? 'white':'black'}}>Latest News Around the World</h1>
      <div className="contanier">
        { datas.filter(item => item.title&& item.description && item.url).map((data, index) => (
          <NewItem
            key={index}
            mode={props.mode}
            image={data.image}
            title={data.title}
            description={data.description}
            url={data.url}
          />
        ))}
      </div>
    </>
  );
}
