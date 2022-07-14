import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Instructors from "./pages/Instructors";
import NotFound from "./pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InstructorDetail from "./pages/InstructorDetail";
import { Navigate } from "react-router-dom";
import Paths from "./pages/Paths";
import FullStack from "./pages/FullStack";
import Aws from "./pages/Aws";
import PrivateRouter from "./pages/PrivateRouter";

//* Nested Route can be used to show nested pages.

//? Link, NavLink and Navigate components are used to perform declarative routing.
//? For example: Link and NavLink are components that can be seen on the page and are directed by interacting with the user. (Nav etc.)

//? Navigate is used to programmatically redirect a link to another link that is not visible on the page. (v5 --> Redirect)

//* useNavigate() is convenient for imperative routing. For example, it can be used to programmatically redirect within a function, event or UseEffect.

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="instructors" element={<Instructors />} />
          <Route path="instructors/:id" element={<InstructorDetail />} />

          {/* NESTED ROUTE 👇 */}
          <Route path="paths" element={<Paths />}>
            {/* Index element is used in nested routes. There is no path name. When you do this, the Fullstack page appears directly. 👇 */}
            <Route index element={<FullStack />} />
            <Route path="fullstack" element={<FullStack />} />
            <Route path="aws" element={<Aws />} />
          </Route>

          <Route path="/contact" element={<PrivateRouter />}>
            <Route path="" element={<Contact />} />
          </Route>

          {/* <Route path="*" element={<NotFound />} /> */}
          {/* Redirect to home page when wrong path is given! (Except the Instructors page. NotFound component will work there) 👇 */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
