import ControlledForm from "./components/ControlledForms/ControlledForm";
import LoginForm from "./components/ControlledForms/LoginForm";
import HTMLForms from "./components/HTMLForms";
import RHFForm from "./components/RHFForms/RHFForm";
import WithValidations from "./components/RHFForms/WithValidations";
import SignUpWithRHFAndZod from "./components/SignUpWithRHFAndZod";
import UncontrolledForm from "./components/UncontrolledForms/UncontrolledForm";
import "./index.css";


function App() {
  return (
    <div>
      {/* <HTMLForms /> */}
      {/* <ControlledForm /> */}
      {/* <LoginForm /> */}
      {/* <UncontrolledForm /> */}
      {/* <RHFForm /> */}
      {/* <Test /> */}
      {/* <WithValidations /> */}
      <SignUpWithRHFAndZod />
    </div>
  );
}

export default App;
