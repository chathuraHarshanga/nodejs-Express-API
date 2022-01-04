import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

let users = [
  {
    name: "Jone",
    LastName: "Doe",
    age: 25,
  },
  {
    name: "Zoe",
    LastName: "Maddison",
    age: 22,
  },
];

//view all users
router.get("/", (req, res) => {
  res.send(users);
});

//create users
router.post("/", (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`${user.name} added to the database`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id == id);
  res.send(foundUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);
  res.send(users);
});

export default router;
