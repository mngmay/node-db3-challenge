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

function findSteps(id) {
  return db("schemes")
    .join("steps", "schemes.id", "steps.scheme_id")
    .where({ scheme_id: id })
    .select(
      "steps.id",
      "schemes.scheme_name",
      "steps.step_number",
      "steps.instructions"
    )
    .orderBy("schemes.id")
    .then(steps => {
      return steps;
    });
}

function add(scheme) {
  return db("schemes")
    .insert(scheme)
    .then(scheme => {
      return scheme;
    });
}

function update() {}

function remove() {}
