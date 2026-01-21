const express = require("express");
const router = express.Router();

const isAuthenticated = false;

router.all("*", (req, res, next) => {
  if (isAuthenticated) {
    next();
  } else {
    res.json({ success: false, error: "Not authenticated" });
  }
});

/* GET categories listing. */
router.get("/", function (req, res, next) {
  res.send({ success: true });
});

module.exports = router;
