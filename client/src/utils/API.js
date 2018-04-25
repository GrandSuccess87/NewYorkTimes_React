import axios from "axios";

// Export an object containing methods we'll use for accessing the NYT API


export default {
    // Gets all articles
    getArticles: function() {
        return axios.get("/api/articles");
    },

    // Save articles
    getArticles: function() {
        return axios.get("/api/articles");
    },

    // Deletes the book with the given id
    deleteBook: function(id) {
        return axios.delete("/api/articles/:id" + id);
    },

    getArticles: function() {
        return axios.get("/*");
    }

    };

  //   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/articles/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/articles", bookData);
//   }
