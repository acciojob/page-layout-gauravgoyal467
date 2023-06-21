
import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";

const App = () => {
  const header="Welcome to my website";
  const children="This is the content of my website";
  const footer="&#169; 2023 My Website.All rights reserved";
  return (
    <div>
        {/* Do not remove the main div */}
        <PageLayout header={header} children={children} footer={footer}/>
    </div>
  )
}

export default App
