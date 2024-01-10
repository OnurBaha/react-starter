import React from "react";
import {Button} from "semantic-ui-react";
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/actions/cartActions";
function Posts() {
	const dispatch = useDispatch();

	return (
		<div>
			Posts
			<Button
				onClick={() => {
					dispatch(addToCart({id: 1, name: "Laptop", price: 10}));
				}}
			>
				Sepete Ekle
			</Button>
		</div>
	);
}

export default Posts;