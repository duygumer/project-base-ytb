const express = require("express");
const router = express.Router();

router.get("/:id", (req, res, next) => {
  res.json({
    body: req.body,
    params: req.params,
    query: req.query,
    hedaers: req.headers,
  });
});

module.exports = router;
