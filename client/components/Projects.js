import React from 'react';
import { motion } from 'framer-motion';
class Projects extends React.Component {
	render() {
		return (
			<motion.div className="projects" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} >
				<motion.div
					className="proj"
					id="museum"
					initial={{ y: 200 }}
					animate={{ y: 0 }}
					exit={{ y: 10 }}
					transition={{ duration: 0.8 }}
				>
					<div className="card" data-test="container">
						<div className="front">
							<img className="proj-icon" height="50" width="50" src="/images/nyclogo.jpg" />
							<div className="description">
								<h3>Real Estate Website</h3>
								<br />
								<p>
									Fullstack development showing the power of relational. Logged in users experience the real estate hunt for
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
							<br />
							<a href="https://museumsofnyc.herokuapp.com" className="tech-used">
								Get your own museum!
							</a>
								<a href="https://github.com/Emis90/castelli" className="tech-used">
									GitHub
								</a>

						</div>
					</div>
				</motion.div>
				<motion.div
					className="proj"
					id="graceinspace"
					initial={{ y: 400 }}
					animate={{ y: 0 }}
					exit={{ y: 10 }}
					transition={{ duration: 0.8 }}
				>
					<div className="card">
						<div className="front">
							<img className="proj-icon" height="50" width="50" src="/images/ship.png" />
							<div className="description">
								<h3>Grace in space</h3>
								<br />
								<p>
									Mobile Virtual Reality game where players collect items floating away in space by tapping the
									screen. You can chose three different levels of difficulty and collect all your best times.
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
							<br />
							<a href="https://www.youtube.com/watch?v=-HUuZn3BKrQ&feature=youtu.be"
								className="tech-used">
								Game Demonstration</a>
								<a href="https://github.com/graceinspace/graceInSpace" className="tech-used">
									GitHub
								</a>

						</div>
					</div>
				</motion.div>
				<motion.div
					className="proj"
					id="gelatofinder"
					initial={{ y: 600 }}
					animate={{ y: 0 }}
					exit={{ y: 10 }}
					transition={{ duration: 0.8 }}
				>
					<div className="card">
						<div className="front">
							<img className="proj-icon" height="50" width="50" src="/images/bank.png" />
							<div className="description">
								<h3>My ReactBank</h3>
								<br />
								<p>React Exercise using a faker server to make api calls and test react hooks. Make transactions or change your credentials using the provided validated forms.</p>
							</div>
						</div>
						<div className="back">
							<div id="div-stack">
								<p className="tech-used">React Native</p>
								<p className="tech-used">Miragejs</p>
								<p className="tech-used">Firebase</p>
							</div>

							<div>
								<a href="https://myreactbank-1c7ef.web.app/" className="tech-used">Make a transaction!</a>
								<br />
								<a href="https://github.com/Emis90/MyBankPage/tree/master/MyBank" className="tech-used">
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
					transition={{ duration: 0.8 }}
				>
					<div className="card">
						<div className="front">
							<img className="proj-icon" height="50" width="50" src="/images/cupcake.png" />
							<div className="description">
								<h3>Cupcake store</h3>
								<br />
								<p>E-commerce website for out of this world cupcakes, available for purchace for both guest users and logged in users.</p>
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
					transition={{ duration: 0.8 }}
				>
					<div className="card">
						<div className="front">
							<img className="proj-icon" src="/images/npm.png" />
							<div className="description">
								<h3>npm module</h3>
								<br />
								<p>
									Matching algorithm for two sets of people based off of the stable marriage problem.
								</p>
							</div>
						</div>
						<div className="back">
							<div id="div-stack">
								<p className="tech-used">Node.js</p>
							</div>
							<br />
								<a href="https://www.npmjs.com/package/matchingev-" className="tech-used">
									GitHub
								</a>

						</div>
					</div>
				</motion.div>
			</motion.div>
		);
	}
}

export default Projects;
