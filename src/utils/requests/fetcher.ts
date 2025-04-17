const fetcher = async (url: string, options?: RequestInit) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
    ...options,
  });

  return response.json();
};

export default fetcher;
