import React from 'react';
import { motion } from 'framer-motion';

class Skills extends React.PureComponent {
	render() {
		return (
			<motion.div className="skills" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
				<motion.div
					id="backend"
					initial={{ x: -600 }}
					animate={{ x: 0 }}
					exit={{ x: 200 }}
					transition={{ duration: 0.1 }}
				>
					<div className="title">
						<img width="40" height="40" src="/images/database.png" />
					</div>
					<div className="stack">
						<p>Node.js</p>
						<p>Express.js</p>
						<p>Sequelize.js</p>
						<p>PosgresQL</p>
						<p>Firebase/Firestore</p>
						<p>GraphQL</p>
					</div>
				</motion.div>
				<motion.div
					id="frontend"
					initial={{ y: 700 }}
					animate={{ y: 0 }}
					exit={{ y: -10 }}
					transition={{ duration: 0.5 }}
				>
					<div className="title">
						<img width="40" height="40" src="/images/computer.png" />
					</div>
					<div className="stack">
						<p>JavaScript</p>
						<p>HTML5</p>
						<p>CSS3</p>
						<p>React</p>
						<p>React Native</p>
						<p>Redux</p>
						<p>Apollo</p>
						<p>Viro(VR/AR)</p>
					</div>
				</motion.div>
				<motion.div
					id="general"
					initial={{ x: 600 }}
					animate={{ x: 0 }}
					exit={{ x: 10 }}
					transition={{ duration: 0.8 }}
				>
					<div className="title">
						<img width="50" height="50" src="/images/face.png" />
					</div>
					<div className="stack">
						<p>Problem solver</p>
						<p>Pair programming</p>
						<p>Creative</p>
						<p>Hard working</p>
						<p>Passionate</p>
						<p>Driven</p>
					</div>
				</motion.div>
			</motion.div>
		);
	}
}

export default Skills;
