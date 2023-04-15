import './App.css';
import MainPage from "./pages/MainPage/MainPage";
import {Route, Routes} from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  return (
    <>
        <Routes>
            <Route index element={<MainPage/>}/>
            <Route path='/about/:id' element={<AboutPage/>}/>
        </Routes>
    </>
  );
}

export default App;
