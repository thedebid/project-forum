const express = require("express");
const router = express.Router();
const { Topics, Posts, Comments } = require("../models");

router.get("/", async (req, res) => {
  const listOfTopics = await Topics.findAll({
    include: [{ model: Posts, include: [Comments] }],
  });
  res.json(listOfTopics);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const post = await Topics.findByPk(id);
  res.json(post);
});

router.post("/", async (req, res) => {
  const topic = req.body;
  await Topics.create(topic);
  res.json(topic);
});

module.exports = router;
