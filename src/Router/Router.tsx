import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

import Home from "../Pages/Home/Home";
import SingleGame from "../Pages/SingleGame/SingleGame";
import Login from "../Pages/Login/Login";
import Unsubscribe from "../Pages/Unsubscribe/Unsubscribe";
import Missing from "../Pages/Missing/Missing";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/games/" element={<Home />} />
        <Route path="/privacy/" element={<Home />} />
        <Route path="/terms/" element={<Home />} />
        <Route path="/games/:gameId" element={<SingleGame />} />
        <Route path="/cancel" element={<Unsubscribe />} />
        <Route path="*" element={<Missing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
export default Router;
