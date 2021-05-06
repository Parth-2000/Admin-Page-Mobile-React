import React, { useState } from "react";
import Navbar from "../components/Navbar";

function AddMobile() {
	const [form, setForm] = useState({
		name: "",
		brand: "",
		color: "",
		price: "",
		rom: "",
		ram: "",
	});

	const handleChange = e => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const resetForm = e => {
		setForm({
			name: "",
			brand: "",
			color: "",
			price: "",
			rom: "",
			ram: "",
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		var mobiles = JSON.parse(localStorage.getItem("mobilesData") || "[]");
		mobiles.push(form);
		localStorage.setItem("mobilesData", JSON.stringify(mobiles));

		setForm({
			name: "",
			brand: "",
			color: "",
			price: "",
			rom: "",
			ram: "",
		});

		alert("Added Successfully");
	};
	return (
		<div style={{ backgroundColor: "black", opacity: 0.8, height: "100vh" }}>
			<Navbar />
			<h3 className="text-center mt-5" style={{ color: "whitesmoke" }}>
				Add Mobile
			</h3>
			<form className="container" onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					value={form.name}
					onChange={e => handleChange(e)}
					placeholder="Mobile Name"
					required
				/>
				<select name="brand" onChange={e => handleChange(e)} required>
					<option selected>Select Brand</option>
					<option value="Samsung">Samsung</option>
					<option value="IPhone">Iphone</option>
					<option value="Oneplus">Oneplus</option>
					<option value="Other">Other</option>
				</select>
				<input
					type="text"
					name="color"
					onChange={e => handleChange(e)}
					value={form.color}
					placeholder="Color"
					required
				/>
				<input
					type="number"
					name="price"
					onChange={e => handleChange(e)}
					value={form.price}
					placeholder="Price (₹)"
					required
				/>
				<input
					type="text"
					name="rom"
					onChange={e => handleChange(e)}
					value={form.rom}
					placeholder="Rom (GB)"
					required
				/>
				<input
					type="text"
					name="ram"
					onChange={e => handleChange(e)}
					value={form.ram}
					placeholder="Ram (GB)"
					required
				/>
				<div className="buttons">
					<button type="submit" className="btn btn-primary" name="submit">
						Submit
					</button>
					<button
						type="reset"
						className="btn btn-secondary"
						onClick={e => resetForm(e)}
						name="reset">
						Reset
					</button>
				</div>
			</form>
		</div>
	);
}

export default AddMobile;
