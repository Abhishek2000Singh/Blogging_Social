const router = require("express").Router();
const Category = require("../models/Category");

//CREATE CATEGORY
router.post("/", async (req, res) => {
    const newCat = new Category(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


//UPDATE CATEGORY
router.get("/", async (req, res) => {

    try {
        const cats = await Category.find();
        res.status(200).json(cats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


//DELETE POST
router.delete("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (post.username === req.body.username) {
            try {
                await post.deleteOne();
                res.status(200).json("Post has been deleted....");
            } catch (error) {
                res.status(500).json({ message: error.message });
            }
        } else {
            res.status(401).json({ message: "You can only delete your own post" });
        }
    } catch (error) {
        res.status(404).json({ message: "Post not found" });
    }

})



//GET A POST
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

//GET ALL POST
router.get("/", async (req, res) => {
    const username = req.query.user;
    const catName = req.query.cat;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username })
        }
        else if (catName) {
            posts = await Post.find({
                categories: {
                    $in: [catName]
                }
            })
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});




module.exports = router;