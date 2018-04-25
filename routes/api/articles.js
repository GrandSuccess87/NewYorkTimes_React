const router = new express.Router();
const articlesController = require("../../controllers/articlesController");

// Routing
// Define any API routes first

router
.route("/")
.get(articlesController.findAll)

// Matches with "/api/article/:id"
router
  .route("/api/articles/")
  // Get saved articles
  .get(articlesController.findById)
  // Save articles
  .put(articlesController.update)

router
  .route("/api/articles/:id")
  // Delete an Article
  .delete(articlesController.remove);

// Send every other request to the React app
router.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


module.exports = router;

