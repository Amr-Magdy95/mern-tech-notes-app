const CustomAPIError = require("../errors/CustomAPIError");
module.exports = (err, req, res, next) => {
  if (err instanceof CustomAPIError)
    return res.status(err.code).json({ message: err.message });
  res.status(500).json({ message: "Something went wrong" });
};
