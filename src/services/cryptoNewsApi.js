const apiKey = process.env.apiKey;

export const fetchCryptoNews = async (newsCategory, count, sortBy) => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${newsCategory}&pageSize=${count}&sortBy=${sortBy}&apiKey=${apiKey}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch news data");
  }

  return response.json();
};
