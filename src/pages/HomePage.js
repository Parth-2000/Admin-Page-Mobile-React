import React from "react";
import Listing from "../components/Listing";
import Navbar from "../components/Navbar";

function HomePage() {
	return (
		<div style={{ backgroundColor: "black", opacity: 0.8 }}>
			<Navbar />
			<Listing />
		</div>
	);
}

export default HomePage;
