const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id: id })
    .then(scheme => {
      return scheme;
    })
    .catch(err => {
      return null;
    });
}

function findSteps() {}

function add() {}

function update() {}

function remove() {}
