import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

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
			<div className="segundop">
				<h1 className="segundot">Have fun while you lear!</h1>
				<p id="info">
					Learn about every animal from the sea to the land and sky,
					and how they make up the animal kingdom!.
				</p>
			</div>
			<div className="card-group">
				<div className="card">
					<h1 className="predators">CARNIVOROUS</h1>
					<img
						src="https://api.time.com/wp-content/uploads/2018/12/lion-conservators-center.jpg"
						className="card-img-top"
						alt="lion"
					/>
					<div className="card-body">
						<p className="lion">
							Learn and discover every animal and what makes them
							unique.
						</p>
						<p className="card-text">
							<small className="text-muted" />
						</p>
					</div>
				</div>
				<div className="card">
					<h1 className="herbibors">HERBIVORES</h1>
					<img
						src="https://megaricos.com/wp-content/uploads/2019/02/Horison-1.jpg"
						className="card-img-top"
						alt="bufalo"
					/>
					<div className="card-body">
						<p className="bufalo">
							All animal species and how they survive.
						</p>
						<p className="card-text">
							<small className="text-muted" />
						</p>
					</div>
				</div>
				<div className="card">
					<h1 className="domestics">DOMESTIC</h1>
					<img
						src="https://www.aristokatzvet.com/wp-content/uploads/2018/12/iStock-875599324.jpg"
						className="card-img-top"
						alt="cat"
					/>
					<div className="card-body">
						<p className="cat">
							Domestic and wild they are all unique.
						</p>
						<p className="card-text">
							<small className="text-muted" />
						</p>
					</div>
				</div>
			</div>
			<div className="anchor">
				<h1 className="linelink">
					for mor information about animals click here
				</h1>
				<a className="a" href="https://en.wikipedia.org/wiki/Animal">
					Click here to learn more!
				</a>
			</div>
		</div>
	);
}
