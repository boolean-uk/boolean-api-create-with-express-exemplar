const db = require("./../../utils/database");
const {createBook} = require("./model");

async function createOne(req, res) {
  const bookToCreate = {
    ...req.body,
  }

  console.log("Attempting to create book:", bookToCreate)
  let result = await createBook(bookToCreate)
  console.log("Book creation response:", result)
  res.json({data: result})
}

function getAll(req, res) {

  const SQL = `SELECT * FROM books;`

  db.query(SQL)
  .then(result => res.json({data: result.rows}))
  .catch(error => res.json({error: error}));
}


module.exports = {createOne, getAll}