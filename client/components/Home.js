import React from 'react';
import { motion } from 'framer-motion';
class Home extends React.Component {
	componentDidMount = async () => {
		let num = await countapi.visits().then((result) => {
			console.log(result.value);
		});
	};

	render() {
		return (
			<div className="about">
				<div id="text">
					<div className="softdev">
						<h1>Enida Vezelaj</h1>
						<h3>Software engineer | NY</h3>
					</div>
					<div className="mystory">
						<p>
							I am a New York based Software Developer. I attedned Grace Hopper at Fullstack Academy of
							code, an immersive training program that teaches developers technologies that are in high
							demand and best practices for implementing them. I have experience pair programming and
							developing projects from start to finish. I am experienced with Java Script, React, NERD
							Stack (Node.js, Express, React, Databases). I am passionate about what I do and I am
							motivated by new challanges.
						</p>
					</div>
					<div id="icons">
						<a href="https://github.com/Emis90">
							<img className="contact-img" width="70" height="70" src="/images/github.png" />
						</a>
						<a href="https://www.linkedin.com/in/enida-vezelaj/">
							<img className="contact-img" width="70" height="70" src="/images/linked.png" />
						</a>
						<a href="mailto:enida.vezelaj@gmail.com">
							<img className="contact-img" width="70" height="70" src="/images/email-icon.png" />
						</a>
					</div>
				</div>
			</div>
		);
	}
}
export default Home;
