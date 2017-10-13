import React from "react";
import Query from "./../Query";
import Results from "./../Results";

//results component needs to get results from nyt query to display

const Search = props => (
	<div>
		<div className="row">
			<div className="col-xs-12">
				<Query onChange={props.onChange} onSubmit={props.onSubmit} />
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