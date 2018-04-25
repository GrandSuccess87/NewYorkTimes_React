import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getArticles: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  }

};

//   getDogsOfBreed: function(breed) {
//     return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
//   },
//   getBaseBreedsList: function() {
//     return axios.get("https://dog.ceo/api/breeds/list");
//   }

// export default {
//   // Gets all articles
//   getarticles: function() {
//     return axios.get("/api/articles");
//   },
//   // Gets the book with the given id
//   getBook: function(id) {
//     return axios.get("/api/articles/" + id);
//   },
//   // Deletes the book with the given id
//   deleteBook: function(id) {
//     return axios.delete("/api/articles/" + id);
//   },
//   // Saves a book to the database
//   saveBook: function(bookData) {
//     return axios.post("/api/articles", bookData);
//   }
// };
