import React, { useState } from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";
import Form from "./components/Form";

const App = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="bg-[#24221B] min-h-screen">
      <Nav setToggle={setToggle} />

      <div className="m-3 p-4 ">
        <Content setToggle={setToggle} />
      </div>

      {toggle && <Form setToggle={setToggle} />}
    </div>
  );
};

export default App;
