import React from "react";

//props would be passed in from ??? main ??? component
const Saved = props => (
	<div className="panel panel-default">
		<div className="panel-heading">
			Saved
		</div>
		<div className="panel-body">
			{props.articles.length ? (
              <ul>
                {props.articles.map(article=> (
                  <li key={article._id}>
					<strong>
						{article.title} - {article.date}
					</strong>
					<span onClick={props.delete(article._id)}>x</span>
                  </li>
                ))}
              </ul>
            ) : (
              <h3>No Results to Display</h3>
            )}
		</div>
	</div>
);

export default Saved;