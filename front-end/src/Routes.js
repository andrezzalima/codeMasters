import { Routes, Route } from "react-router-dom";
//css
import "./App.css";
//components
import Initial from "./components/Initial/Initial";
import Quiz from "./components/Quiz/Quiz";

export default () => {
  return (
    <Routes>
      <Route exact path="/" element={<Initial />}></Route>
      <Route exact path="/quiz" element={<Quiz />}></Route>
    </Routes>
  );
};
