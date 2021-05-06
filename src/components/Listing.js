import React, { useRef, useState } from "react";
import Card from "./Card";

function Listing() {
	const [mobiles, setMobiles] = useState(
		JSON.parse(localStorage.getItem("mobilesData") || "[]")
	);

	const ref1 = useRef(null);
	const ref2 = useRef(null);

	const handle = e => {
		var currentPrice = ref1.current.value;
		var currentBrand = ref2.current.value;

		if (currentPrice === "All" && currentBrand === "All") {
			setMobiles(JSON.parse(localStorage.getItem("mobilesData")));
		} else if (currentPrice === "All" && currentBrand !== "All") {
			setMobiles(
				JSON.parse(localStorage.getItem("mobilesData")).filter(
					mobile => mobile.brand === currentBrand
				)
			);
		} else if (currentPrice !== "All" && currentBrand === "All") {
			var price = currentPrice.split("-");
			setMobiles(
				JSON.parse(localStorage.getItem("mobilesData")).filter(
					mobile =>
						Number(mobile.price) > Number(price[0]) &&
						Number(mobile.price) <= Number(price[1])
				)
			);
		} else {
			var price1 = currentPrice.split("-");
			setMobiles(
				JSON.parse(localStorage.getItem("mobilesData")).filter(
					mobile =>
						Number(mobile.price) > Number(price1[0]) &&
						Number(mobile.price) <= Number(price1[1]) &&
						mobile.brand === currentBrand
				)
			);
		}
	};

	return (
		<div className="container">
			<h1 className="text-center" style={{ color: "whitesmoke" }}>
				List of Mobiles
			</h1>
			<div className="filters">
				<select onChange={e => handle(e)} ref={ref2} name="brand" required>
					<option defaultValue="All" value="All">
						Filter By Brand
					</option>
					<option value="Samsung">Samsung</option>
					<option value="IPhone">Iphone</option>
					<option value="Oneplus">Oneplus</option>
					<option value="Other">Other</option>
				</select>
				<select onChange={e => handle(e)} ref={ref1} name="price" required>
					<option defaultValue="All" value="All">
						Filter By Price
					</option>
					<option value="0-15000">0 - 15000</option>
					<option value="15000-25000">15000 - 25000</option>
					<option value="25000-40000">25000 - 40000</option>
					<option value="40000-100000">40000 - 100000</option>
				</select>
			</div>
			<div>
				{mobiles && (
					<div className="row justify-content-center">
						{mobiles.map(mobile => (
							<div key={`${mobile.name}`} className="col-6 col-md-4">
								<Card mobile={mobile} />
							</div>
						))}
					</div>
				)}
				{mobiles.length === 0 && (
					<h3 className="text-center">No Mobile Found</h3>
				)}
			</div>
		</div>
	);
}

export default Listing;
