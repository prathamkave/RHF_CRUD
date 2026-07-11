import Nav from "./components/Nav";
import Content from "./components/Content";
import Form from "./components/Form";
import UserCard from "./components/UserCard";

const App = () => {
  return (
    <div className="bg-[#24221B] min-h-screen">
      <Nav />
      <div>
        <Content />
      </div>
    </div>
  );
};

export default App;
