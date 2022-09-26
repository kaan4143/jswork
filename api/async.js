const getNews = async function () {
  const API_KEY = "a8425c650c92438dbba8ecbd122e69d7";

  const url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + API_KEY;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      isError = true;
      // throw new Error(`Something went wrong: ${res.status} `);
    }
    const data = await res.json();
    // console.log(data.articles);
    renderNews(data.articles);
  } catch (error) {
    console.log(error);
  }
};




getNews()