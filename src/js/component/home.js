import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div>
			<div className="card bg-dark text-white">
				<img
					src="https://www.ppt-backgrounds.net/thumbs/green-frog-animal--animals-green--ppt-template-ppt.jpeg"
					className="card-img"
					alt="..."
				/>
			</div>
			<div className="card-img-overlay">
				<h5 className="card-title">LEARN ANIMALS</h5>
				<p className="intro-text">
					Take a look at some of the most awsome animal and what makes
					them unique at the same time that you learn about the 8.7
					million species of animals.
				</p>
				<button type="button" className="boton1">
					Begin Here
				</button>
			</div>
			<div className="card-group">
				<div className="card">
					<img
						src="https://api.time.com/wp-content/uploads/2018/12/lion-conservators-center.jpg"
						className="card-img-top"
						alt="lion"
					/>
					<div className="card-body">
						<h5 className="card-title" />
						<p className="card-text">
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This content
							is a little bit longer.
						</p>
						<p className="card-text">
							<small className="text-muted">
								Last updated 3 mins ago
							</small>
						</p>
					</div>
				</div>
				<div className="card">
					<img
						src="https://www.tripsavvy.com/thmb/78vQWAIMMGqLzr8cZrXrQRuvOAI=/2121x1414/filters:fill(auto,1)/GettyImages-546915010-59da7322af5d3a0010234e2e.jpg"
						className="card-img-top"
						alt="monkey"
					/>
					<div className="card-body">
						<p className="card-text">
							This card has supporting text below as a natural
							lead-in to additional content.
						</p>
						<p className="card-text">
							<small className="text-muted" />
						</p>
					</div>
				</div>
				<div className="card">
					<img
						src="https://www.aristokatzvet.com/wp-content/uploads/2018/12/iStock-875599324.jpg"
						className="card-img-top"
						alt="cat"
					/>
					<div className="card-body">
						<p className="card-text">
							This is a wider card with supporting text below as a
							natural lead-in to additional content. This card has
							even longer content than the first to show that
							equal height action.
						</p>
						<p className="card-text">
							<small className="text-muted">
								Last updated 3 mins ago
							</small>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
