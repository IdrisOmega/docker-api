import Group from "../models/group.model.js";

export const getGroups = async (req, res) => {
  const groups = await Group.find();
  res.json(groups);
};

export const getGroupById = async (req, res) => {
  const group = await Group.findById(req.params.id);
  if (!group) return res.status(404).json({ message: "Grupo no encontrado" });
  res.json(group);
};

export const createGroup = async (req, res) => {
  const newGroup = new Group(req.body);
  await newGroup.save();
  res.status(201).json(newGroup);
};

export const updateGroup = async (req, res) => {
  const updatedGroup = await Group.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedGroup) return res.status(404).json({ message: "Grupo no encontrado" });
  res.json(updatedGroup);
};

export const deleteGroup = async (req, res) => {
  const deletedGroup = await Group.findByIdAndDelete(req.params.id);
  if (!deletedGroup) return res.status(404).json({ message: "Grupo no encontrado" });
  res.json({ message: "Grupo eliminado" });
};
