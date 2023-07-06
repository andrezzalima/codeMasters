import { Splide, SplideSlide } from "@splidejs/react-splide";
import "./Carousel.css";
import code from "../../img/code.png";
import vetor from "../../img/vetor.png";

import "@splidejs/react-splide/css";

export default function Examplo() {
  return (
    <div className="background-carrocel">
      <Splide aria-label="Minhas imagens favoritas" > 
        <SplideSlide >
          <h1>Testa o teu <br></br>conhecimento...</h1>
          <div className="imagens-carrocel">
            <img src={code} alt="Imagem 1" className="code" />
            <img src={vetor} alt="Imagem 2" className="vetor" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <h1>Avalia as tuas <br></br>habilidades... </h1>
          <div className="imagens-carrocel">
            <img src={code} alt="Imagem 1" className="code"/>
            <img src={vetor} alt="Imagem 2" className="vetor" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <h1>alert <br></br>('Desafia-te...')</h1>
          <div className="imagens-carrocel">
            <img src={code} alt="Imagem 1" className="code" />
            <img src={vetor} alt="Imagem 2" className="vetor" />
          </div>
        </SplideSlide>
        <SplideSlide>
          <h1>return “Torna-te um mestre do código!”</h1>
          <div className="imagens-carrocel">
            <img src={code} alt="Imagem 1" className="code"/>
            <img src={vetor} alt="Imagem 2" className="vetor"/>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}
