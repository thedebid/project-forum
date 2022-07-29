const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");
const { validateToken } = require("../middleware/AuthMiddleware");

const { sign } = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10).then((hash) => {
    Users.create({
      username: username,
      password: hash,
    });
    res.json("success");
  });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await Users.findOne({ where: { username: username } });
  console.log(user);
  if (!user) {
    res.status(400).json({ error: "User doesn't exists" });
    return;
  }

  bcrypt.compare(password, user.password).then((match) => {
    if (!match) {
      res.status(400).json({ error: "Wrong user and password combination" });
      return;
    }

    const accessToken = sign(
      { username: user.username, id: user.id },
      "importantSecret"
    );
    res.json({ token: accessToken, username: username, id: user.id });
  });
});

router.get("/auth", validateToken, (req, res) => {
  res.json(req.user);
});

module.exports = router;
