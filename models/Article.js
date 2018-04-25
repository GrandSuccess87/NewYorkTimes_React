// Require mongoose
const mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
const Schema = mongoose.Schema;

// Using the Schema constructor, create a new ExampleSchema object
// This is similar to a Sequelize model
const ArticleSchema = new Schema({

    title: {
        type: String,
        required: true
      },
      // `link` is required and of type String
      link: {
        type: String,
        required: true
      },
    
      summary: {
          type: String,
          required: true
      }
});

// This creates our model from the above schema, using mongoose's model method
const Article = mongoose.model("Article", ArticleSchema);

// Export the Example model
module.exports = Article;
