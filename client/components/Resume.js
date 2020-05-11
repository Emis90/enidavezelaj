import React from "react";

class Resume extends React.PureComponent {
  render() {
    return (
      <div className="resume">
        <iframe
          src="/images/Enida_00.pdf"
          height="80%"
          width="80%"
          frameBorder=".3"
          allowFullScreen
        />
      </div>
    );
  }
}
export default Resume;
