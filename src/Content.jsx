import axios from "axios";
import { ArticlesIndex } from "./ArticlesIndex";
import { useState, useEffect } from "react";

export function Content() {
  const [articles, setArticles] = useState([]);

  const handleIndexArticles = () => {
    console.log("handleIndexArticles");
    axios.get(`KEY`).then((response) => {
      console.log(response.data);
      setArticles(response.data.articles);
    });
  };

  useEffect(handleIndexArticles, []);

  return (
    <div>
      <ArticlesIndex articles={articles} />
    </div>
  );
}
