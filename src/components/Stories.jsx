import React, { useEffect } from "react";

const Stories = () => {
  const API = "https://hn.algolia.com/api/v1/search?query=html";

  const fetchApiData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApiData(API);
  }, []);

  return (
    <div>
      <h1>Daily Tech News</h1>
    </div>
  );
};

export default Stories;
