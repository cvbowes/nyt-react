import React from "react";

//need to use parent (search component) method for handleFormSubmit and handleInputChange
const Query = () => (
	<div className="panel panel-default">
		<div className="panel-heading">
			Search
		</div>
		<div className="panel-body">
			<form>
				<div className="form-group">
					<label htmlFor="topic">Topic</label>
					<input type="text" className="form-control" id="topic"></input>

				</div>
				<div className="form-group">
					<label htmlFor="start">Start Year</label>
					<input type="number" className="form-control" min="1900" max="2017" step="1" id="start"></input>
				</div>
				<div className="form-group">
					<label htmlFor="end">End Year</label>
					<input type="number" className="form-control" min="1900" max="2017" step="1" id="end"></input>
				</div>
				<button type="submit" className="btn btn-default" id="searchBtn">Search</button>
			</form>
		</div>
	</div>
);

export default Query;