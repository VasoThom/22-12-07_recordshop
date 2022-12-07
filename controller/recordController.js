import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
const db = new Low(new JSONFile("./data/db.json"));
// await db.read();
// console.log(db.data.photos);

export const getAllrecord = async (req, res) => {
  await db.read();
  res.json(db.data.records);
  // console.log(db.data.records);
};
export const getrecord = async (req, res) => {
  await db.read();
  res.json(db.data.records.find((a) => a.id === +req.params.id));
};
// leipei
export const postAllrecord = async (req, res) => {
  await db.read();

  const nextId = Math.max(...db.data.records.map((a) => a.id)) + 1;

  db.data.records.push({ id: nextId, ...req.body });

  db.write();

  res.send(`${nextId}`);
};
export const putAllrecord = async (req, res) => {
  await db.read();
  const index = db.data.records.findIndex((a) => a.id === +req.params.id);

  db.data.records[index] = { ...db.data.records[index], ...req.body };
  await db.write();
  res.send(`${req.params.id} updated`);
  console.log(req.body);
};
//leipei
export const deleteAllrecord = async (req, res) => {
  await db.read();
  const index = db.data.records.findIndex((a) => a.id === +req.params.id);

  db.data.records.splice(index, 1);

  db.write();

  res.send(`${req.params.id} deleted`);
};
