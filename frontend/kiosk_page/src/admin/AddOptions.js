//서버로부터 옵션 가져와서 보여주는 곳.
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import { BASE_URL } from "../constants/Url";
import "../Home.css";
import "../Common.css";
import "./Admin.css";

export default function AddCategories() {
    
    const navigate = useNavigate();
    const location = useLocation();
    const selectedCategoryId = location.state.selectedCategoryId;
    const selectedCategoryName = location.state.selectedCategoryName;
    console.log(selectedCategoryId);
    console.log(selectedCategoryName);
    //뒤로 가는 함수
    function herf_back() {
        navigate('/Admin');
    }
    
    return (
        <div id = "pay_page">
            <div id="top_bar_back" onClick={herf_back}></div>
            <header>KIOSK Admin</header>
            <div className='rect1'>
              <div className='txt1'>옵션을 선택하세요</div>
              <div className='rect2'></div>
            </div>
        </div>
    );
}