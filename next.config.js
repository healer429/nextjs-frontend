const withImages = require("next-images");
module.exports = withImages({
  env: {
    REACT_APP_API: "https://dev.innova-labs.net:9080",
  },
  target: "serverless",
});
