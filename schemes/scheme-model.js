const db = require("../data/db-config.js");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
  addStep
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id: id })
    .then(scheme => {
      if (scheme) {
        return scheme[0];
      } else {
        return null;
      }
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
    .then(id => {
      return findById(id[0]);
    });
}

function update(changes, id) {
  return db("schemes")
    .where({ id: id })
    .update(changes)
    .then(changes => {
      return findById(id);
    });
}

function remove(id) {
  const removed = findById(id);
  return db("schemes")
    .where({ id: id })
    .del()
    .then(scheme => {
      if (scheme) {
        return removed;
      } else {
        return null;
      }
    });
}

function addStep(step, scheme_id) {
  return db("steps")
    .insert({ ...step, scheme_id: scheme_id })
    .then(steps => {
      return findSteps(scheme_id);
    });
}
