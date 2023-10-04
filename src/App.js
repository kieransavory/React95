import "./styles.css";
import Taskbar from "./Components/Taskbar";
import IconsList from "./Components/IconsList";

export default function App() {
  function clickPosition(e) {
    let x = e.clientX;
    let y = e.clientY;
    if (e.button === 2) {
      console.log(x, y);
    }
  }

  return (
    <div onMouseDown={clickPosition} className="App">
      <IconsList />
      <Taskbar />
    </div>
  );
}
