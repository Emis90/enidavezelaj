import React from "react";

class Resume extends React.PureComponent {
  render() {
    return (
      <div className="resume">
        <iframe
          src="/images/EnidaVezelaj.pdf"
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
