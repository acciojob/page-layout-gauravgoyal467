import React from "react";
import './../styles/App.css';

const PageLayout = (props) => {
  return (
    <div>
        {/* Do not remove the main div */}
        <p>{props.header}</p>
        <p>{props.children}</p>
        <p>{props.footer}</p>
    </div>
  )
}

export default PageLayout