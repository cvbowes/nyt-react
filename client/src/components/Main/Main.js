import React, { Component } from "react";
import Search from "./../Search";
import Saved from "./../Saved";
import API from "../../utils/API";
import $ from 'jquery';
// import { Link } from "react-router-dom";

//WHERE DOES HTE STATE AND THE API STUFF GO
//for querying NYT database
const authKey = "9d4a8986921972b65754ea0809d47c84:12:74623931";
const numResults = 10;

// URL Base
const queryURLBase = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;


class Main extends Component {

	state = {
		savedArticles: [],
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
	        this.setState({ savedArticles: res.data, topic: "", startYear: "", endYear: "" })
	      )
	      .catch(err => console.log(err));
  	};
  	//saved component
    deleteArticle = id => {
	    API.deleteArticle(id)
	      .then(res => this.loadSaved())
	      .catch(err => console.log(err));
    };

	//need to pass to query component
	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
		  [name]: value
		});
	};


	//need to pass info to query component
	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.topic && this.state.startYear && this.state.endYear) {

		// Add in the Search Term
		var newURL = queryURLBase + "&q=" +this.state.topic;

		if (parseInt(this.state.startYear) <= parseInt(this.state.endYear)) {

		// Add start date information to the URL
			newURL += "&begin_date=" + this.state.startYear + "0101";

			// Add end date information to the URL
			newURL = newURL + "&end_date=" + this.state.endYear + "0101";
		}

		// Send the AJAX Call the newly assembled URL
		this.NYTquery(numResults, newURL);
		};
	};
//not sure which the query goes in
	NYTquery = (numArticles, queryURL)  => {
		$.ajax({
		url: queryURL,
		method: "GET"
		}).done(function(NYTData, err) {
			if (err) {
				console.log(err);
			}
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
		return(
			<div className="main-container">
				<div className="jumbotron text-center">
					<h1>help me</h1>
				</div>

				<div className="container-fluid">
					<Search onChange={this.handleInputChange} onSubmit={this.handleFormSubmit}/>
					<Saved articles={this.state.savedArticles} delete={this.deleteArticle}/>
				</div>

			</div>
		);
	}
}

export default Main;