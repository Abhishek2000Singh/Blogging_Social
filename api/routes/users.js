const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const Post = require("../models/Post");

//UPDATE
router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password, salt);
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });
            res.status(200).json(updatedUser);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    } else {
        res.status(401).json({ message: "You can only update your own account" });
    }
})


//DELETE
router.delete("/:id", async (req, res) => {
    if (req.body.userId === req.params.id) {
        try {
            const user = await User.findById(req.params.id);
            try {
                await Post.deleteMany({ username: user.username });
                await User.findByIdAndDelete(req.params.id);
                res.status(200).json("User has been deleted...");
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        } catch (error) {
            res.status(404).json({ message: "User not found..." });
        }

    } else {
        res.status(401).json({ message: "You can only delete your own account" });
    }
});


//GET A USER
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});




module.exports = router;