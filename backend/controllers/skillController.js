const Skill = require("../models/Skill");

const createSkill = async (req, res) => {
    try {
        const { name, category, description, offeredBy } = req.body;

        const skill = new Skill({
            name,
            category,
            description,
            offeredBy
        });

        await skill.save();

        res.status(201).json({
            message: "Skill created successfully",
            skill
        });
    } catch (error) {
        res.status(500).json({
            message: "Skill creation failed",
            error: error.message
        });
    }
};

const getSkills = async (req, res) => {
    try {
        const skills = await Skill.find().populate("offeredBy", "name email");

        res.status(200).json({
            skills
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to fetch skills",
            error: error.message
        });
    }
};

module.exports = {
    createSkill,
    getSkills
};