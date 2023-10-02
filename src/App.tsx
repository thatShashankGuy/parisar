import Portfolio from "./Components/Portfolio/Portfolio";
import ComingSoon from "./Components/Shared/ComingSoon/ComingSoon";
import FooterNav from "./Components/Shared/FooterNav/FooterNav";
import Contact from "./Components/Contact/Contact";
import _404 from "./Components/Shared/404/404";
import Footer from "./Components/Shared/Footer/Footer";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";


function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <section id="main-content">
              <Portfolio />
            </section>
          }
        />
        <Route
          path="/contact"
          element={
            <section id="main-content">
              <Contact />
            </section>
          }
        />
        <Route
          path="/services"
          element={
            <section id="main-content">
               <ComingSoon
                name="Services"
              /> 
            </section>
          }
        />
        <Route
          path="/blogs"
          element={
            <section id="main-content">
              <ComingSoon name="Blogs" />
            </section>
          }
        />
        <Route
          path="/404"
          element={
            <section id="main-content">
              <_404 />
            </section>
          }
        />
        <Route path="*" element={<Navigate to="/404" replace={true} />} />
      </Routes>

      <footer id="footer-content">
        <FooterNav />
        <Footer/>
      </footer>
    </>
  );
}

export default App;
