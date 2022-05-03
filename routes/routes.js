import express from "express";
import usersService from "../modules/users/usersService.js";

const routes = express.Router();

routes.get("/users", async (req, res) => {
  const users = await usersService.getUsersData();

  res.send(users);
});

routes.get("/users/all", async (req, res) => {
  const users = await usersService.getUsers();

  res.send(users);
});

export default routes;
