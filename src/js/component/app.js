import React, { useState } from "react";

export const App = () => {
	const [color, setColor] = useState("");
	if (color) {
		document.querySelector(`#${color}`).classList.add(`selected-${color}`);
	}

	return (
		<div className="container">
			<div className="traffic-light mt-3 d-flex justify-content-center flex-column align-items-center">
				<div className="">{color}</div>
				<div className="traffic-light-top"></div>
				<div
					className="traffic-light-bottom p-2"
					onClick={(e) => {
						for (let item of e.target.parentNode.children) {
							item.classList.contains(`selected-${color}`)
								? item.classList.remove(`selected-${color}`)
								: null;
						}
						setColor(e.target.id);
					}}>
					<div id="red" className="light red"></div>
					<div id="yellow" className="light yellow"></div>
					<div id="green" className="light green"></div>
				</div>
			</div>
		</div>
	);
};
