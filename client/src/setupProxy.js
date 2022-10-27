const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
     app.use(
          "/api",
          createProxyMiddleware({
               target:
                    process.env.HTTPS === "true"
                         ? `https://${process.env.SERVER_HOST}:${process.env.SERVER_SECURE_PORT}`
                         : `http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`,
               changeOrigin: true,
               secure: false,
          })
     );
};
