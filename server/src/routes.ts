import express from "express";

import convertHoursToMinutes from "./utils/convertHoursToMinutes";
import ClassesController from "./controllers/ClassesController";

const routes = express.Router();
const classesControllers = new ClassesController();

routes.post("/classes", classesControllers.create);

export default routes;
