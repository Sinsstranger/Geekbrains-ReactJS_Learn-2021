import React from "react";

export const PostItem = React.memo(({title, body}) => {
	return (
		<div className="post-item">
			<p className="post-item__title">{title}</p>
			<div className="post-item__body">{body}</div>
		</div>
	);
});