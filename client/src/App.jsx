import Home from "./pages/Home";
import Customizer from "./pages/Customizer";
import Canvas from "./canvas/index";

function App() {
  return (
    <main
      className="app transition-all ease-in"
      style={{ backgroundImage: `url('${"./fest-drop.gif"}')` }}
    >
      <Home />
      <Customizer />
      <Canvas />
    </main>
  );
}

export default App;
