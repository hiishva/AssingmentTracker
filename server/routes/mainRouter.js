const express = require("express");
const mainRouter = express.Router();
const controller = require("../controller/mainController");

mainRouter.route("/add-assignment").post(controller.addAssignment);
mainRouter.route("/get-all-assignments").get(controller.getAllAssignments);
mainRouter.route("/delete").post(controller.delete);
mainRouter.route("/update").post(controller.update);
mainRouter.route("/login").get(controller.login);
mainRouter.route("/loggedIn").get(controller.loggedIn);
mainRouter.route("/").get(controller.home);
module.exports = mainRouter;
