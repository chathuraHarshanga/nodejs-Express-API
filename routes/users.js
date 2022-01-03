import express from "express";

const router = express.Router();

const users = [
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

  users.push(user);

  res.send(`${user.name} added to the database`);
});

export default router;
