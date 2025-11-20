import React, { useEffect, useState } from "react";
import NewItem from "./NewItem";
import Spinner from "./Spinner";
export default function NewsParent(props) {
  const [articles, setarticle] = useState([]);
  const [loading, setloading] = useState(false);
  let api_key = process.env.REACT_APP_API_KEY;
  let Url = `https://api.allorigins.win/get?url=${encodeURIComponent(
  `https://newsapi.org/v2/top-headlines?category=${props.category}&apiKey=${api_key}`
)}`;
  
 useEffect(() => {
  setloading(true);
  fetch(Url)
    .then((response) => response.json())
    .then((data) => {
      // proxy سے ملنے والا raw جواب کنسول میں دیکھو
      console.log("RAW proxy response:", data);

      // proxy کے اندر اصل API کا JSON (string) ہوتا ہے، اسے پارس کرو
      const parsedData = JSON.parse(data.contents);

      // یہ بھی کنسول میں دکھاؤ تاکہ NewsAPI کی reply صاف نظر آئے
      console.log("Parsed NewsAPI response:", parsedData);

      // اگر NewsAPI نے error دیا تو اسے throw کرو تاکہ catch پکڑے
      if (parsedData.status && parsedData.status !== "ok") {
        // parsedData.code یا parsedData.message میں اصل وجہ ہوگی
        throw new Error(`${parsedData.status}: ${parsedData.code || parsedData.message}`);
      }

      // سب ٹھیک ہو تو articles سیٹ کرو
      setarticle(parsedData.articles);
    })
    .catch((err) => {
      console.log("This is the HTTP error", err);
      // user feedback دکھانے کے لیے:
      alert("News API error: " + err.message);
    })
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
