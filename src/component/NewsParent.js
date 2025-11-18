import React, { useEffect, useState } from "react";
import NewItem from "./NewItem";
import Spinner from "./Spinner";
export default function NewsParent(props) {
  const [articles, setarticle] = useState([]);
  const [loading, setloading] = useState(false);
  let api_key = "1abc3c6036604595a09618a6efd7c870";
  let Url = `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${api_key}`;
  useEffect(() => {
    setloading(true);
    fetch(Url)
     .then((response) => response.json())
      .then((data) => setarticle(data.articles))
      .catch((err) => console.log(err))

      .finally(() => setloading(false));
  }, [Url]);
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
