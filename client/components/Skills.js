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
					whileHover={{ scale: 1.3, duration: .8 }}
					transition={{ duration: 0.1 }}

				>
					<div style={{ paddingTop: 5 }}>
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
					initial={{ y: 750 }}
					animate={{ y: 0 }}
					exit={{ y: -10 }}
					transition={{ duration: 0.3 }}
					whileHover={{ scale: 1.3, duration: 1 }}
				>
					<div style={{ paddingTop: 5 }}>
						<img width="40" height="40" src="/images/computer.png" />
					</div>
					<div className="stack">
						<p>JavaScript (ES6+)</p>
						<p>HTML5/CSS3</p>
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
					whileHover={{ scale: 1.3, duration: 1.2 }}
				>
					<div style={{ paddingTop: 5 }}>
						<img width="50" height="50" src="/images/face.png" />
					</div>
					<div className="stack">
						<p>Object Oriented programming</p>
						<p>Test Driven Development</p>
						<p>Agile approach</p>
						<p>Abstract Thinking</p>
						<p>Deployment</p>
					</div>
				</motion.div>
			</motion.div>
		);
	}
}

export default Skills;
