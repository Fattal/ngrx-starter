const PROXY_CONFIG = {
  "/data/*": {
    "target": "http://data.lc",
    "changeOrigin": true
  }
};

module.exports = PROXY_CONFIG;
