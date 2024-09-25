import { Route, Routes } from "react-router-dom";
import Main from "./components/main";
import Header from "./components/header";
import Footer from "./components/footer";
import Contacts from "./components/contacts";
import Cart from "./components/cart";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
