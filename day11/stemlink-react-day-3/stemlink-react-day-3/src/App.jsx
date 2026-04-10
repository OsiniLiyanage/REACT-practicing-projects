import Greeting from "./components/Greeting";
import NewGreeting from "./components/NewGreeting";
import Notifications from "./components/Notifications";
import CounterRef from "./components/CounterRef";
import InputForcus from "./components/InputForcus";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import User from "./components/User";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/hello" element={<Greeting />}></Route>
        <Route path="/user/:id" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
