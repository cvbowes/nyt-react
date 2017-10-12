import React from "react";
import Query from "./../Query";
import Results from "./../Results";
//this component needs to store the search info (as state) and pass it into the ??? query ??? component for search
//results component needs to get results from nyt query to display
const Search = () => (
	<div>
		<div className="row">
			<div className="col-xs-12">
				<Query />
			</div>
		</div>
		<div className="row">
			<div className="col-xs-12">
				<Results />
			</div>
		</div>
	</div>
);

export default Search;