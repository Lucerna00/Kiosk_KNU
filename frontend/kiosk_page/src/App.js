import React, { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import MealOption from "./MealOption";
import StartMenu from "./StartMenu";
import MainMenu from "./MainMenu";
import Pay from "./Pay";
import PayCheck from "./PayCheck";
import SignUp from "./SignUp";
import Face from "./Face";
import LoginCheck from "./LoginCheck";
import PhoneNum from "./PhoneNum";
import Admin from "./admin/Admin";
import Delete from "./admin/Delete";
import AddCategories from "./admin/AddCategories";
import AddOptions from "./admin/AddOptions";
import AddIngredients from "./admin/AddIngredient";
import AddLast from "./admin/AddLast";
import Alert from './Alert';

function App() {
  const [alertVisibility, setAlertVisibility] = useState(false);
  const [alertMessage, setAlertMessage] = useState('This is an alert message.');

  const showAlert = (message) => {
    setAlertMessage(message);
    setAlertVisibility(true);
  };

  return (
    <HashRouter>
      <Alert message={alertMessage} visibility={alertVisibility} setVisibility={setAlertVisibility} />
      <Routes>
        <Route path="/" element={<StartMenu />} /> {/* Default route */}
        <Route path="/LoginCheck" element={<LoginCheck showAlert={showAlert} />} />
        <Route path="/PhoneNum" element={<PhoneNum />} />
        <Route path="/Face" element={<Face />} /> {/* Default route */}
        <Route path="/MealOption" element={<MealOption />} /> {/* Default route */}
        <Route path="/MainMenu" element={<MainMenu />} /> {/* Default route */}
        <Route path="/Pay" element={<Pay />} /> {/* Default route */}
        <Route path="/PayCheck" element={<PayCheck />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Delete" element={<Delete />} />
        <Route path="/AddCategories" element={<AddCategories />} />
        <Route path="/AddOptions" element={<AddOptions />} />
        <Route path="/AddIngredient" element={<AddIngredients />} />
        <Route path="/AddLast" element={<AddLast />} />
      </Routes>
    </HashRouter>
  );
}

export default App;