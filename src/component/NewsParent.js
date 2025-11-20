import React, { useEffect, useState } from "react";
import NewItem from "./NewItem";
import Spinner from "./Spinner";
export default function NewsParent(props) {
  const [articles, setarticle] = useState([]);
  const [loading, setloading] = useState(false);
  let api_key = process.env.REACT_APP_API_KEY;
  let Url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${api_key}`;
  useEffect(() => {
    setloading(true);
    fetch(Url)
     .then((response) => {
      if(!response.ok){
        throw new Error(`HTTP error! status:${response.status}`);
      }
      return response.json()})
      .then((data) => setarticle(data.articles))
      .catch((err) => console.log(`this is the HTTP error ${err}`))
      
      .finally(() => setloading(false));
  }, [props.category]);
  return (
    <>
    <div className="spinner_parent">
      {loading && <Spinner />}

    </div>
     <h1 style={{color: props.mode? 'white':'black'}}>Latest News Around the World</h1>
      <div className="contanier">
        {articles.map((article, index) => (
          <NewItem
            key={index}
            mode={props.mode}
            image={article.urlToImage}
            title={article.title}
            description={article.description}
            url={article.url}
          />
        ))}
      </div>
    </>
  );
}
