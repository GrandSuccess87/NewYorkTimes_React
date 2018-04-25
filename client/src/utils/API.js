import axios from "axios";

// SETUP VARIABLES
// ==========================================================

// This variable will be pre-programmed with our authentication key
// (the one we received when we registered)
// const authKey = "eb224fc679f94707908d69cdcb028e8a";

// These variables will hold the results we get from the user's inputs via HTML
const searchTerm = "";
const numResults = 0;
const startYear = 0;
const endYear = 0;
// Counter to keep track of article numbers as they come in
const articleCounter = 0;


// queryURLBase is the start of our API endpoint. The searchTerm will be appended to this when
// the user hits the search button
// const queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
//   authKey + "&q=";


// Export an object containing methods we'll use for accessing the NYT API
const api = {
    // Query NYT API
    search: function(topic, startYear, endYear) {
      const authKey = "eb224fc679f94707908d69cdcb028e8a";
      const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +
      authKey + "&q=" + topic + "&begin_date=" + startYear + "0101&end_date=" + endYear + "0101";
      return axios.get(queryURL);
    },

    // Gets all saved articles
    getArticles: function() {
        return axios.get("/api/articles");
    },

    // Save articles
    getArticles: function(savedArticleObject) {
        return axios.put("/api/articles", savedArticleObject);
    },

    // Deletes the book with the given id
    deleteBook: function(id) {
        return axios.delete("/api/articles/${id}");
    },

    getArticles: function() {
        return axios.get("/*");
    }
    };

    export default api;
    
  //   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/articles/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/articles", bookData);
//   }
