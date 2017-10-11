import React from "react";
import Query from "./../Query";
import Results from "./../Results";

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