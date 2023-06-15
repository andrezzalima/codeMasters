import { Routes, Route } from "react-router-dom";
//css
import "./App.css";
//components
import Initial from "./components/Initial/Initial";
import Quiz from "./components/Quiz/Quiz";
import CodeMastersProfiles from "./components/codeMasters_profiles/codeMastersProfiles"
import SignUp from "./components/SignUp/SignUp";
import Perfil from "./components/Perfil.js/Perfil";

export default () => {
  return (
    <Routes>
      <Route exact path="/" element={<Initial />}></Route>
      <Route exact path="/quiz" element={<Quiz />}></Route>
      <Route exact path="/codemastersprofiles" element={<CodeMastersProfiles />}></Route>
      <Route exact path="/signup" element={<SignUp />}></Route>
      <Route exact path="/perfil" element={<Perfil />}></Route>
    </Routes>
  );
};
