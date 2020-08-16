import express from "express";

import convertHoursToMinutes from "./utils/convertHoursToMinutes";
import ClassesController from "./controllers/ClassesController";

const routes = express.Router();
const classesControllers = new ClassesController();

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

export default routes;
