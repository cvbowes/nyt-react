import React, { Component } from "react";
import Search from "./../Search";
import Saved from "./../Saved";
import API from "../../utils/API";
import { Link } from "react-router-dom";

//WHERE DOES HTE STATE AND THE API STUFF GO

const Main = () => (
	<div className="main-container">
		<div className="jumbotron text-center">
			<h1>help me</h1>
		</div>

		<div className="container-fluid">
			<Search />
			<Saved />
		</div>



	</div>
);

export default Main;