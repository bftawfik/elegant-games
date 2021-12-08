import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../Pages/Home/Home";
import SingleGame from "../Pages/SingleGame/SingleGame";
import Login from "../Pages/Login/Login";
import Unsubscribe from "../Pages/Unsubscribe/Unsubscribe";
import Missing from "../Pages/Missing/Missing";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/game/:gameId" element={<SingleGame />} />
        <Route path="/cancel" element={<Unsubscribe />} />
        <Route path="*" element={<Missing />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
