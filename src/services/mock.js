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

const mockLogin = async () => {
  return await mock({
    mockUser : {
      firstName : "Petar",
      lastName : "Petrovic",
      email : "pekip@gmail.com",
      role : "WAREHOUSE_EMPLOYEE"
    },
    mockToken : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  })
}

export { mockArticles, mockLogin };
