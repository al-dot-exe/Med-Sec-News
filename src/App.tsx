import { useState, useEffect } from "react";
import Header from "./components/Header";
import NewsCards from "./components/NewsCards";
import Footer from "./components/Footer";

// Figure out how to only initiate this custom interface once and not in multiple files
interface CardInfo {
  key: number;
  source: any;
  author: string;
  title: string;
  description: string;
  url: string;
  img?: string;
  publishedAt: string;
  content?: string;
}

const App = () => {
  // State for fetched news
  const [newsCards, setNewsCards] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const articlesFromServer = await fetchArticles();
      const sortedArticles = sortByDate(articlesFromServer);
      setNewsCards(sortedArticles);
    };

    getArticles(); //getter to grab articles from database
  }, []);

  // Fetches articles from json database
  const fetchArticles = async () => {
    const res = await fetch("http://localhost:5000/articles");
    const data = await res.json();
    return data;
  };

  // Article sorter
  const sortByDate = (articleObjects: any) => {
    return articleObjects.sort((a: CardInfo, b: CardInfo) => {
      return Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
    });
  };

  return (
    <>
      <Header />
      <NewsCards cards={newsCards} />
      <Footer />
    </>
  );
};

export default App;
