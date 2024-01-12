import React from "react";
import {Card, Button} from "semantic-ui-react";
// Built-in
function PostCard(props:any) {
	console.log(props);
	return (
		<Card>
			<Card.Content>
				<Card.Header>{props.post.title}</Card.Header>
				<Card.Meta>
					<span className="date">User ID: {props.post.userId}</span>
				</Card.Meta>
				<Card.Description>{props.post.body}</Card.Description>
			</Card.Content>
			<Card.Content extra>
				<Button
					onClick={() => {
						props.onDelete(props.post.id);
					}}
					basic
					color="red"
				>
					Kaldır
				</Button>
			</Card.Content>
		</Card>
	);
}

export default PostCard;