import React from "react";
import './../styles/App.css';

const PageLayout = (props) => {
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>{props.header}</h1>
        <p>{props.children}</p>
        <h2>{props.footer}</h2>
    </div>
  )
}

export default PageLayout