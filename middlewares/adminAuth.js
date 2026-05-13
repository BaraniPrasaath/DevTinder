const adminAuth = (req, res, next) => {
  console.log("Authentication works");
  const token = "xyz";
  const isAuthorized = token === "xyz";
  if (!isAuthorized) {
    res.status(401).send("Un Authorized User");
  } else {
    next();
  }
};

module.exports = {
    adminAuth
}