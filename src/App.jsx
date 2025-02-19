import Navbar from "./components/Navbar.jsx";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/Blog.jsx";
import Menu from "./components/Menu.jsx";
import Contend from "./components/Contend.jsx";
import Pricing from "./components/Pricing.jsx";
import Home from './pages/Home.jsx';
import Login from "../src/components/Login.jsx";
import Sinup from "./components/Sinup.jsx";
import Hammasi from "./components/Hammasi.jsx";
import Layout from "./components/Layout.jsx";
function App() {
  return (
    <div className="bg-[#F9F9F9]">
      <main>
        <Routes>
          <Route path="/" element={<Layout><Home/></Layout>} />
          <Route path="/menu" element={<Layout><Menu /></Layout>} />
          <Route path="/blog" element={<Layout><Blog /></Layout>} />
          <Route path="/pricing" element={ <Layout><Pricing/></Layout>} />
          <Route path="/contact" element={<Layout><Contend /></Layout>} />
          <Route path="/login" element={<Login />} />
           <Route path="/sinup" element={<Sinup/>} />
          <Route path="/hammasi" element={<Layout><Hammasi/></Layout>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
