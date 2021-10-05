import Header from "./components/Header";
import "./css/App.css";
import "./css/fontawesome-pro-5.14.0-web/css/all.min.css"
import "./css/assets/css.css"
import "./css/responsize.css"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import DieuhuongURL from "./components/DieuhuongURL";
import {AnimatePresence,motion } from "framer-motion"
import HeaderContainer from "./containers/HeaderContainer";
import ScrollToTop from "./components/SrollToTop/ScrollToTop";
import Modalfavorite from "./components/Modalfavorite";

function App() {
  const location = useLocation();
  return <AnimatePresence><Switch location={location} key={location.key}>
    <Router>
    {/* <Header></Header> */}
    <HeaderContainer></HeaderContainer>
    <Modalfavorite></Modalfavorite>
    <ScrollToTop scrollStepInPx="24" delayInMs="0"></ScrollToTop>
    <DieuhuongURL></DieuhuongURL>
    </Router>
    </Switch></AnimatePresence>
}

export default App;
