const fs = require("fs");
const path = require("path");

exports.login = async (req, res, next) => {
  // let userData = JSON.parse(
  //   fs.readFileSync(path.resolve(__dirname, "../database/user.json"))
  // );

  let newData = "true";
  fs.writeFileSync(path.resolve(__dirname, "../database/user.json"), newData);
  res.status(200);

  //loop through all assignmenet and find one where the title a
};

exports.loggedIn = async (req, res, next) => {
  let isLoggedIn = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../database/user.json"))
  );

  res.status(200).json({ isLoggedIn });

  //loop through all assignmenet and find one where the title a
};

exports.update = async (req, res, next) => {
  let oldAssignment = req.body.oldAssignment;
  let newAssignment = req.body.newAssignment;

  let assignmentData = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../database/assignment.json"))
  );

  let i = 0;
  for (let a of assignmentData) {
    if (a.title === oldAssignment.title && a.start === oldAssignment.start) {
      assignmentData[i] = newAssignment;
    }
    i++;
  }

  let newData = JSON.stringify(assignmentData);
  fs.writeFileSync(
    path.resolve(__dirname, "../database/assignment.json"),
    newData
  );

  res.status(200);

  //loop through all assignmenet and find one where the title a
};

exports.delete = async (req, res, next) => {
  let assignment = req.body;

  let assignmentData = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../database/assignment.json"))
  );

  let i = 0;
  for (let a of assignmentData) {
    if (a.title === assignment.title && a.start === assignment.start) {
      assignmentData[i] = {};
    }
    i++;
  }

  let newData = JSON.stringify(assignmentData);
  fs.writeFileSync(
    path.resolve(__dirname, "../database/assignment.json"),
    newData
  );

  res.status(200);

  //loop through all assignmenet and find one where the title a
};

exports.addAssignment = async (req, res, next) => {
  let assignment = req.body;

  let assignmentData = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../database/assignment.json"))
  );

  assignmentData.push(assignment);

  let newData = JSON.stringify(assignmentData);
  fs.writeFileSync(
    path.resolve(__dirname, "../database/assignment.json"),
    newData
  );

  res.status(200).json(newData);
};

exports.home = async (req, res, next) => {
  res.status(200).json({ data: "Sup from the server, loser" });
};

exports.getAllAssignments = async (req, res, next) => {
  let data = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../database/assignment.json"))
  );
  //console.log(JSON.stringify(data));
  res.status(200).json(JSON.stringify(data));
};
