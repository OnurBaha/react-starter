import React from "react";
import {Link} from "react-router-dom";

function Homepage() {



	return (
		<div>
			Homepage
			<br />
			{/* İç linklerde href kullanımı YASAK */}
			{/* <a href="/posts">Posts</a> */}
			{/* <a href="https://google.com" target="_blank">
				Google
			</a> */}
			<Link to={"/posts"}>Posts</Link>
		</div>
	);
}

export default Homepage;