import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";

//WHERE DOES THE API AND STATE STUFF GO

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

  loadSaved = () => {
    API.getSaved()
      .then(res =>
        this.setState({ articles: res.data, topic: "", startYear: "", endYear: "" })
      )
      .catch(err => console.log(err));
  };

  deleteArticle = id => {
    API.deleteArticle(id)
      .then(res => this.loadSaved())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

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
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6">
            <Jumbotron>
              <h1>Books On My List</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;