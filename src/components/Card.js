import React from "react";

function Card({ mobile }) {
	return (
		<div className="card m-3" style={{ width: "19rem" }}>
			<div className="card-body">
				<h3 className="card-title text-center">{mobile.name}</h3>
				<h5 className="card-text text-secondary text-center">
					₹ {mobile.price}
				</h5>
				<p className="card-text text-center">Brand: {mobile.brand}</p>
				<p className="card-text text-center">Color: {mobile.color}</p>
				<p className="card-text text-center">RAM: {mobile.ram}</p>
				<p className="card-text text-center">ROM: {mobile.rom}</p>
			</div>
		</div>
	);
}

export default Card;
