import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";

//this contains a bunch of functionality that im not sure how to organize in the other files

//for querying NYT database
const authKey = "9d4a8986921972b65754ea0809d47c84:12:74623931";
var numResults = 10;

// URL Base
const queryURLBase = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;

class Articles extends Component {
  state = {
    articles: [],
    topic: "",
    startYear: "",
    endYear: ""
  };

  componentDidMount() {
    this.loadSaved();
  }
//saved component - componentDidMount
  loadSaved = () => {
    API.getSaved()
      .then(res =>
        this.setState({ articles: res.data, topic: "", startYear: "", endYear: "" })
      )
      .catch(err => console.log(err));
  };
//saved component
  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadSaved())
      .catch(err => console.log(err));
  };
//needs to go in query component??
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
//needs to go in ??????????? search component?????
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.topic && this.state.startYear && this.state.endYear) {

      // Add in the Search Term
      var newURL = queryURLBase + "&q=" +this.state.topic;

      if (parseInt(this.state.startYear) <= parseInt(this.state.endYear)) {

        // Add start date information to the URL
        newURL += "&begin_date=" + startYear + "0101";

        // Add end date information to the URL
        newURL = newURL + "&end_date=" + endYear + "0101";
      }

      // Send the AJAX Call the newly assembled URL
      NYTquery(numResults, newURL);
    };
  };
//not sure which the query goes in
  NYTquery = (numArticles, queryURL)  => {
    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(NYTData) {

      // Logging to Console
      console.log("------------------");
      console.log(queryURL);
      console.log("------------------");
      console.log(numArticles);
      console.log(NYTData);

      return NYTData;
    });
  };

  render() {
    return (
     
    );
  }
}

export default Articles;