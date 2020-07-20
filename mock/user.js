module.exports = [
  // user login
  {
    url: "/user/login",
    type: "post",
    response: config => {
      const token = "bearer 8293de1c-1052-40c9-ad4a-8f5abc12f0e4";

      return {
        code: 20000,
        data: token
      };
    }
  }
];
