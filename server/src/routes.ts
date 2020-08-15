import express from "express";
import db from "./database/connection";

const routes = express.Router();

routes.post("/classes", async (request, response) => {
  const { name, avatar, whatsaap, bio, subject, cost, schedule } = request.body;

  const insertdUsersIds = await db("users").insert({
    name,
    avatar,
    whatsaap,
    bio,
  });

  const user_id = insertdUsersIds[0];

  await db("classes").insert({
    subject,
    cost,
    user_id,
  });

  return response.send();
});

export default routes;
