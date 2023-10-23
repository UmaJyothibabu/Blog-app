const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  let token = req.body.token;
  if (!req.body.token) {
    const authHeader = req.headers["authorization"];
    console.log(authHeader);
    token = authHeader && authHeader.split(" ")[1];
    console.log(token);
  }

  jwt.verify(token, "ict", (err, decoded) => {
    if (decoded && decoded.email) {
      req.token = token;
      next();
    } else {
      return res.json({ message: "Unauthorised user" });
    }
  });
};
module.exports = auth;
// export default auth;
