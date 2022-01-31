import React, { useState } from "react";

export const Trafficlight = () => {
	let selected = {
		boxShadow: "0px 0px 57px 19px red",
	};

	const [color, setColor] = useState("");
	if (color == "red" || color == "yellow" || color == "green") {
		document.querySelectorAll(".light").forEach((light) => {});
	}

	return (
		<div className="container">
			<div className="traffic-light mt-3 d-flex justify-content-center flex-column align-items-center">
				<div className="traffic-light-top"></div>
				<div
					className="traffic-light-bottom p-2"
					onClick={(e) => {
						setColor(e.target.id);
						console.log(color);
					}}>
					<div id="red" className="light red"></div>
					<div id="yellow" className="light yellow"></div>
					<div id="green" className="light green"></div>
				</div>
			</div>
		</div>
	);
};
