import React from "react";
import MainPage from "../pages/MainPage";
import { Routes as Switch, Route } from "react-router-dom";
import SignUpPage from "../pages/SignUpPage";

export default function Router() {
  return (
    <div>
      <Switch>
        <Route path="/" element={<MainPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Switch>
    </div>
  );
}
