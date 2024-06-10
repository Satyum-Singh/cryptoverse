export const fetchCryptoNews = async (
  newsCategory,
  count,
  searchQuery,
  sortBy
) => {
  const apiKey = process.env.News_Api_Key;

  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${
      newsCategory || searchQuery
    }&pageSize=${count}&sortBy=${sortBy}&apiKey=${apiKey}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch news data");
  }

  return response.json();
};
