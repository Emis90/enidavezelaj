import React from "react";
import { motion } from "framer-motion";

class Resume extends React.PureComponent {
  render() {
    return (
      <motion.div
        className="resume"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <iframe
          src="/images/Enida_00.pdf"
          height="70%"
          width="70%"
          frameBorder=".3"
          allowFullScreen
        />
      </motion.div>
    );
  }
}
export default Resume;
