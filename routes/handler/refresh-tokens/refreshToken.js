const jwt = require("jsonwebtoken");
const apiAdapter = require("../../apiAdapter");
const {
  URL_SERVICE_USER,
  JWT_SECRET,
  JWT_SECRETE_REFRESH_TOKEN,
  JWT_ACCESS_TOKEN_EXPIRED,
} = process.env;

const api = apiAdapter(URL_SERVICE_USER);

module.exports = async (req, res) => {
  try {
    const refreshToken = req.body.refresh_token;
    const email = req.body.email;

    // Check if refresh token and email is exist
    if (!refreshToken || !email) {
      return res.status(400).json({
        status: "error",
        message: "invalid token",
      });
    }

    // Check if refresh token is exist in database
    await api.get("/refresh_tokens", { params: { refresh_token: refreshToken } });

    // verify token is valid or not expired
    jwt.verify(refreshToken, JWT_SECRETE_REFRESH_TOKEN, (err, decoded) => {
      if (err) {
        return res.status(403).json({
          status: "error",
          message: err.message,
        });
      }

      // Check if email is same with email in token
      if (email !== decoded.data.email) {
        return res.status(400).json({
          status: "error",
          message: "email is not valid",
        });
      }

      // Generate new access token
      const token = jwt.sign({ data: decoded.data }, JWT_SECRET, {expiresIn: JWT_ACCESS_TOKEN_EXPIRED});
      return res.json({
        status: "success",
        data: {
          token,
        },
      })
    });
  } catch (error) {
    if (error.code === "ECONNREFUSED") {
      return res
        .status(500)
        .json({ status: "error", message: "Service unavailable" });
    }
    const { status, data } = error.response;
    return res.status(status).json(data);
  }
};
