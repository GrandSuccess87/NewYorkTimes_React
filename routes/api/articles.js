const router = new express.Router();
const articlesController = require("../../controllers/articlesController");

// Routing

// Define any API routes first

// Get saved articles
router.get("/api/articles", articlesController.find);
// Save articles
router.post("/api/articles", articlesController.insert);
// delete saved articles
router.delete("/api/articles/delete/:id", articlesController.delete);
// Send every other request to the React app
router.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// // Matches with "/api/article"
// router.route("/")
//   .get(articleController.findAll)
//   .post(articleController.create);

// // Matches with "/api/article/:id"
// router
//   .route("/:id")
//   .get(articleController.findById)
//   .put(articleController.update)
//   .delete(articleController.remove);

module.exports = router;
