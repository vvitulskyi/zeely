import Content from "./components/Content";
import LeftSidebar from "./components/LeftSidebar";

function App() {
  return (
    <div className="main-container d-none d-md-grid">
      <LeftSidebar />
      <Content />
    </div>
  );
}

export default App;
