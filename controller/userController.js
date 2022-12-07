import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
const db = new Low(new JSONFile("./data/db.json"));
// await db.read();

export const getAllusers = async (req, res) => {
  await db.read();
  res.json(db.data.user);
  console.log(db.data.user);
};
export const getuser = async (req, res) => {
  await db.read();
  res.json(db.data.user.find((a) => a.id === +req.params.id));
};
// leipei
export const postAllusers = async (req, res) => {
  await db.read();

  const nextId = Math.max(...db.data.user.map((a) => a.id)) + 1;

  db.data.user.push({ id: nextId, ...req.body });

  db.write();

  res.send(`${nextId}`);
};
export const putAllusers = async (req, res) => {
  await db.read();

  const index = db.data.user.findIndex((a) => a.id === +req.params.id);

  db.data.user[index] = { ...db.data.user[index], ...req.body };
  await db.write();
  res.send(`${req.params.id} updated`);
  console.log(req.body);
};
export const deleteAllusers = async (req, res) => {
  await db.read();
  const index = db.data.user.findIndex((a) => a.id === +req.params.id);

  db.data.user.splice(index, 1);

  db.write();

  res.send(`${req.params.id} deleted`);
};
