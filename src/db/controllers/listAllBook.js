const Book = require("../models/bookmodel");

async function listallbooks(req,res) {
try {
    await Book.findAll();
    res.status(200).json(output)
}  catch (error) {
    console.log(error);
    res.status(500).json(error)
}

}


module.exports = listallbooks;