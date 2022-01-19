const db = require("./../../utils/database");
const BookModel = require("./model");

async function createOne(req, res) {
  const bookToCreate = {
    ...req.body,
  }

  console.log("Attempting to create book:", bookToCreate)
  let result = await BookModel.createBook(bookToCreate)
  console.log("Book creation response:", result)
  res.json({data: result})
}

async function getAll(req, res) {
  console.log("Attempting to get all books")
  let result = await BookModel.getAllBooks()
  console.log("Fetching books response:", result)
  res.json({data: result})
}

module.exports = {createOne, getAll}