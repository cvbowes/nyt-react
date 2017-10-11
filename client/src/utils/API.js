import axios from "axios";

export default {
  // Gets all saved articles
  getSaved: function() {
    return axios.get("/api/saved");
  },
  // Deletes (un-saves) the article with the given id
  deleteArticle: function(id) {
    return axios.delete("/api/articles/" + id);
  },
  // Saves an article to the database
  saveArticle: function(articleData) {
    return axios.post("/api/article", articleData);
  }
};
