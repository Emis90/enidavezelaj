import React from 'react';
import { motion } from 'framer-motion';
const Skills = () => {
	return (
		<motion.div className="skills">
			<motion.div id="backend">
				<div style={{ paddingTop: 5 }}>
					<img width="40" height="40" src="/images/database.png" />
				</div>
				<div className="stack">
					<p>Node / npm</p>
					<p>Express</p>
					<p>PosgreSQL</p>
					<p>Firebase</p>
					<p>GraphQL / Apollo</p>
					<p>REST API</p>
				</div>
			</motion.div>
			<motion.div id="frontend">
				<div style={{ paddingTop: 5 }}>
					<img width="40" height="40" src="/images/computer.png" />
				</div>
				<div className="stack">
					<p>JavaScript (ES6+)</p>
					<p>HTML5/CSS3</p>
					<p>React</p>
					<p>React Native</p>
					<p>Redux</p>
					<p>Sapper / Svelte</p>
					<p>Viro (VR/AR)</p>
					<p>Webpack</p>
				</div>
			</motion.div>
			<motion.div id="general">
				<div style={{ paddingTop: 5 }}>
					<img width="50" height="50" src="/images/face.png" />
				</div>
				<div className="stack">
					<p>Git</p>
					<p>Jira</p>
					<p>Heroku</p>
					<p>Testing (Mocha, Jest)</p>
					<p>Deployment</p>
				</div>
			</motion.div>
		</motion.div>
	);
}

export default Skills;
