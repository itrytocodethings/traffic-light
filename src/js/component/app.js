import React, { useState } from "react";

export const App = () => {
	const [color, setColor] = useState("");
	return (
		<div className="container">
			<div className="traffic-light mt-3 d-flex justify-content-center flex-column align-items-center">
				<div className="mb-3" style={{ color: `${color}` }}>
					<h1>{color}</h1>
				</div>
				<div className="traffic-light-top"></div>
				<div
					className="traffic-light-bottom p-3 rounded"
					onClick={(e) => {
						if (e.target.id && e.target.id != color) {
							for (let item of e.target.parentNode.children) {
								item.classList.contains(`selected-${color}`)
									? item.classList.remove(`selected-${color}`)
									: null;
							}
							setColor(e.target.id);
						}
					}}>
					<div
						id="red"
						className={`light red ${
							color == "red" ? `selected-red` : null
						}`}></div>
					<div
						id="yellow"
						className={`light yellow ${
							color == "yellow" ? `selected-yellow` : null
						}`}></div>
					<div
						id="green"
						className={`light green ${
							color == "green" ? `selected-green` : null
						}`}></div>
				</div>
			</div>
		</div>
	);
};
