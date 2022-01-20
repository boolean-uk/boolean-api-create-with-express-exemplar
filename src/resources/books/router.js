const express = require("express");
const { createOne, getAll } = require("./controller");

const router = express.Router();

// http://localhost:3030/books/
router.post("/", createOne);

router.get("/", getAll);


module.exports = router;