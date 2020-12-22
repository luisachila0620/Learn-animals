import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div>
			<div className="card bg-dark text-white">
				<img
					src="https://cowboystatedaily.com/wp-content/uploads/2020/01/wolf-scaled.jpg"
					className="card-img"
					alt="..."
				/>
				<div className="card-img-overlay">
					<h5 className="card-title">LEARN ANIMALS</h5>
				</div>
			</div>
		</div>
	);
}
