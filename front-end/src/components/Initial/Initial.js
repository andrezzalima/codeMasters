import "./Initial.css";
import { Link } from "react-router-dom";
//images
import logo from "../../img/logo.png";
import imagem_initial from "../../img/tecnology.png";
//components
import Examplo from "./Carousel";



function Initial() {
  return (
    <div className="background-initial">
      <div className="header-initial">
        <img src={logo} className="logo"></img>
        <Link to="/codemastersprofiles"><button className="button-codeMasters">Conheça nossos CodeMasters</button></Link>
        <img src={imagem_initial} className="tecnology"></img>
      </div>
      <div className="body-initial">
        <div className="carrocel">
            <Examplo/>
          </div>
        </div>
        <Link to="/quiz"><button className="button-quiz">Junta-te a nós</button></Link>
      
      </div>

  );
}

export default Initial;
