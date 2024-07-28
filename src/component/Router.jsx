import "../component/Header.css";
import { BrowserRouter , Route, Routes} from "react-router-dom";

import Header from '../component/Header';
import Main from "../component/Main";

import Inputs from "../pages/Inputs";
import OneSearch from "../pages/OneSearch";
import Search from "../pages/Search";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";

const Router = () => {

    return (
        <div className="root-wrap">
        <BrowserRouter>
        <Header />
          <Routes>
            {/* 주 페이지 */}
            <Route path="/home" element={<Main/>} />
            <Route path="/write" element={<Inputs/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/OneSearch" element={<OneSearch/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/logout" element={<div>로그아웃 페이지</div>} />
            {/*  */}
          </Routes>
        </BrowserRouter>
      </div>
    );
};

export default Router;