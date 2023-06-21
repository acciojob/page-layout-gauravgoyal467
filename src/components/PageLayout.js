import React from "react";
import './../styles/App.css';

const PageLayout = (props) => {
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>{props.header}</h1>
        <h2>{props.children}</h2>
        <h3>{props.footer}</h3>
    </div>
  )
}

export default PageLayout