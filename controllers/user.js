import { v4 as uuidv4 } from "uuid";

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

export const CreateUser = (req, res) => {
  const user = req.body;

  users.push({ ...user, id: uuidv4() });

  res.send(`${user.name} added to the database`);
};

export const getUsers = (req, res) => {
  res.send(users);
};

export const getUser = (req, res) => {
  const { id } = req.params;

  const foundUser = users.find((user) => user.id == id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);
  res.send(users);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, LastName, age } = req.body;

  let user = users.find((user) => user.id == id);

  if (name) user.name = name;

  if (LastName) user.LastName = LastName;

  if (age) user.age = age;

  res.send(user);
};
