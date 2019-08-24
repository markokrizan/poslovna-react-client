const mock = data => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};

const mockArticles = async () => {
  return await mock([
    {
      id: 1,
      name: "Article 1",
      quantity: 12,
      value: 1200
    },
    {
      id: 2,
      name: "Article 2",
      quantity: 12,
      value: 1200
    }
  ]);
};

export { mockArticles };
