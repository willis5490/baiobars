const path = require("path");
const router = require("express").Router();


// send to react app
router.get('*',(req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
