import express from "express";
import db from "./database/connection";

const routes = express.Router();

interface ScheduleItem {
  week_day: number;
  from: string;
  to: string;
}

routes.post("/classes", async (request, response) => {
  const { name, avatar, whatsaap, bio, subject, cost, schedule } = request.body;

  const insertdUsersIds = await db("users").insert({
    name,
    avatar,
    whatsaap,
    bio,
  });

  const user_id = insertdUsersIds[0];

  const insertedClassesIds = await db("classes").insert({
    subject,
    cost,
    user_id,
  });

  const class_id = insertedClassesIds[0];

  const classSchedule = schedule.map((scheduleItem) => {
    return {};
  });

  return response.send();
});

export default routes;
