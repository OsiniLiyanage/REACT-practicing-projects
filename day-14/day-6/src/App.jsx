import "./index.css";
import ZodoForm from "./components/Zodo/ZodoForm";
import UserProfile from "./components/UserProfile/UserProfile";
import PDUserProfile from "./components/PropDrilling/PDUserProfile";
import Layout from "./components/UseContextAPI/Layout";
import { UserProvider } from "./context/UserContext";
import SignUpWithRHFAndZod from "./components/Zodo/SignUpWithRHFAndZod";
import CartLayout from "./components/CartApp/CartLayout";
import { CartProvider } from "./context/CartContext";
import ThemeToggle from "./components/Theme/ThemeToggle";
import Header from "./components/Theme/Header";
import Content from "./components/Theme/Content";

function App() {
  return (
    <div>
      {/* <Layout /> */}
      {/* <ZodoForm /> */}
      {/* <SignUpWithRHFAndZod /> */}
      {/* <UserProfile /> */}
      {/* <PDUserProfile /> */}
      {/* <UserProvider>
      <Layout />
      </UserProvider> */}
      {/* <CartProvider>
        <CartLayout/>
      </CartProvider> */}
      {/* <UserProfile/> */}
      <Header/>
      <ThemeToggle/>
      <Content/>
      

    </div>
  );
}

export default App;
