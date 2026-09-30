const express = require("express");
const { createSkill, getSkills } = require("../controllers/skillController");

const router = express.Router();

router.post("/", createSkill);
router.get("/", getSkills);

module.exports = router;