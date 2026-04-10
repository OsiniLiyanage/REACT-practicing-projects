import "./index.css";
import UseState from "./components/UseState";
import UseRef from "./components/UseRef";
import InputFocus from "./components/InputFocus";
import Counter from "./components/Counter";
import CustomerHook from "./components/CustomerHook";
import CustomerHookEx2 from "./components/CustomerHookEx2";
import Home from "./components/Home";
import About from "./pages/About/About";
import Text from "./components/Text";
import CurrentDate from "./components/CurrentDate";

function App() {
  return (
    <div>
      <CurrentDate />
      {/* <Text /> */}
      {/* <CustomerHook /> */}
      {/* <About /> */}
      {/* <Home /> */}
      {/* <CustomerHookEx2 /> */}
      {/* <UseState />
      <hr />
      <UseRef />
      <hr />
      <InputFocus />
      <Counter /> */}
    </div>
  );
}

export default App;
