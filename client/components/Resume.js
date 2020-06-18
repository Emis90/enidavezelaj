import React from "react";

class Resume extends React.PureComponent {
  render() {
    return (
      <div className="resume">
        <iframe
          src="/images/EniV.pdf"
          height="90%"
          width="80%"
          frameBorder=".2"
          allowFullScreen
        />
      </div>
    );
  }
}

export default Resume
