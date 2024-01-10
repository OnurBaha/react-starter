import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import {cartActions} from "../../store/slices/cartSlice";
function Posts() {

	const dispatch = useDispatch();

	return (
		<div>
			Posts

			<Button
				onClick={() => {
					dispatch(cartActions.addToCart({id: 1, name: "Deneme", price: 50}));
				}}
			>
				Sepete Ekle
			</Button>
		</div>
	);
}

export default Posts;