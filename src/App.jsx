import React from "react";
import Nav from "./components/Nav";
import Content from "./components/Content";
const App = () => {
  return (
    <div>
      <Nav />
      <div className="m-3 p-4">
        <Content />
      </div>

      {/* <Form />
      <UserCard />
      <Button /> */}
    </div>
  );
};

export default App;
