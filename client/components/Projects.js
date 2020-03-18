import React from 'react';
import { motion } from 'framer-motion';
class Projects extends React.Component {
	render() {
		return (
			<motion.div className="projects" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
				<motion.div
					className="proj"
					id="museum"
					initial={{ y: 200 }}
					animate={{ y: 0 }}
					exit={{ y: 10 }}
					transition={{ duration: 0.5 }}
				>
					<div className="card">
						<div className="front">
							<img className="proj-icon" height="50" width="50" src="/images/museum.jpg" />
							<div className="description">
								<h3>Real Estate Website</h3>
								<br />
								<p>
									Fullstach development where users can log in and experience the real estate hunt for
									amazing NYC museums.
								</p>
							</div>
						</div>
						<div className="back">
							<div id="div-stack">
								<p className="tech-used">Node.js</p>
								<p className="tech-used">PostgreSQL</p>
								<p className="tech-used">React</p>
							</div>

							<a href="https://museumsofnyc.herokuapp.com" className="tech-used">
								Get your own museum!
							</a>
							<div>
								<a href="https://github.com/Emis90/castelli" className="tech-used">
									GitHub
								</a>
							</div>
						</div>
					</div>
				</motion.div>
				<motion.div
					className="proj"
					id="graceinspace"
					initial={{ y: 400 }}
					animate={{ y: 0 }}
					exit={{ y: 10 }}
					transition={{ duration: 0.5 }}
				>
					<div className="card">
						<div className="front">
							<img className="proj-icon" height="50" width="50" src="/images/ship.png" />
							<div className="description">
								<h3>Grace in space</h3>
								<br />
								<p>
									Mobile VR game where the player collects items floating away in space by tapping the
									screen.
								</p>
							</div>
						</div>
						<div className="back">
							<div id="div-stack">
								<p className="tech-used">Viro</p>
								<p className="tech-used">React Native</p>
								<p className="tech-used">Redux</p>
								<p className="tech-used">Firebase/Firestore</p>
							</div>
							<a
								href="https://www.youtube.com/watch?v=-HUuZn3BKrQ&feature=youtu.be"
								className="tech-used"
							>
								Game Demonstration
							</a>
							<div>
								<a href="https://github.com/graceinspace/graceInSpace" className="tech-used">
									GitHub
								</a>
							</div>
						</div>
					</div>
				</motion.div>
				<motion.div
					className="proj"
					id="gelatofinder"
					initial={{ y: 600 }}
					animate={{ y: 0 }}
					exit={{ y: 10 }}
					transition={{ duration: 0.5 }}
				>
					<div className="card">
						<div className="front">
							<img className="proj-icon" height="50" width="50" src="/images/gelato.png" />
							<div className="description">
								<h3>Gelato finder</h3>
								<br />
								<p>Mobile application for finding the best sweet spots in the city</p>
							</div>
						</div>
						<div className="back">
							<div id="div-stack">
								<p className="tech-used">React Native</p>
								<p className="tech-used">Firebase</p>
							</div>

							<div>
								<a href="https://github.com/Emis90/GelatoFinder" className="tech-used">
									GitHub
								</a>
							</div>
						</div>
					</div>
				</motion.div>
				<motion.div
					className="proj"
					id="cupcakestore"
					initial={{ y: 800 }}
					animate={{ y: 0 }}
					exit={{ y: 10 }}
					transition={{ duration: 0.5 }}
				>
					<div className="card">
						<div className="front">
							<img className="proj-icon" height="50" width="50" src="/images/cupcake.png" />
							<div className="description">
								<h3>Cupcake store</h3>
								<br />
								<p>E-commerce website for out of this world cupcakes!</p>
							</div>
						</div>
						<div className="back">
							<div id="div-stack">
								<p className="tech-used">Node.js</p>
								<p className="tech-used">React</p>
								<p className="tech-used">Firebase</p>
								<p className="tech-used">Firestore</p>
							</div>
							<div>
								<a href="https://fantasticsweetcupcakes.herokuapp.com" className="tech-used">
									Buy some cupcakes!
								</a>
							</div>
							<div>
								<a
									href="https://github.com/fantastic-four-grace-shopper/grace-shopper"
									className="tech-used"
								>
									GitHub
								</a>
							</div>
						</div>
					</div>
				</motion.div>
				<motion.div
					className="proj"
					id="matchinev"
					initial={{ y: 1000 }}
					animate={{ y: 0 }}
					exit={{ y: 10 }}
					transition={{ duration: 0.5 }}
				>
					<div className="card">
						<div className="front">
							<img className="proj-icon" src="/images/npm.png" />
							<div className="description">
								<h3>npm module</h3>
								<br />
								<p>
									Matching alorithm for two sets of elements base off of the stable marriage alorithm
								</p>
							</div>
						</div>
						<div className="back">
							<div id="div-stack">
								<p className="tech-used">Node.js</p>
							</div>
							<div>
								<a href="https://www.npmjs.com/package/matchingev-" className="tech-used">
									GitHub
								</a>
							</div>
						</div>
					</div>
				</motion.div>
			</motion.div>
		);
	}
}

export default Projects;
