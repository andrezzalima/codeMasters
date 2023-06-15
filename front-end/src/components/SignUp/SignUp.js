import { Link } from "react-router-dom";
import "./SignUp.css";
import logo from "../../img/logo.png";
import logotipo from "../../img/logotipo.png";
import { useState } from "react";
function SignUp() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
  });

  function handleEvent(e, param) {
    setUser((prevState) => ({ ...prevState, [param]: e.target.value }));
  }

  const sendData = async (info) => {
    console.log(info);
    const res = await fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    });
    const data = await res.json();
    console.log(await data);
    return await data;
  };

  return (
    <div className="background-signUp">
      <Link to="/">
        <img src={logotipo} className="logotipo"></img>
      </Link>
      <div className="content-signup">
        <div className="div-text-signUp">
          <img src={logo} className="logo"></img>
          <p className="p-signup">
            Parabéns por te tornares um dos <span>MELHORES PROGRAMADORES</span>!
            O teu talento e dedicação levaram-te ao topo. Continua a brilhar e a
            inspirar com as tuas habilidades excepcionais!
          </p>
        </div>
        <div className="div-inputs-signUp">
          <label className="label-signup">Nome e Apelido:</label>
          <input
            type="name"
            value={user.name}
            onChange={(e) => handleEvent(e, "name")}
            className="input-signup"
          ></input>
          <label className="label-signup">Username:</label>
          <input
            type="name"
            value={user.username}
            onChange={(e) => handleEvent(e, "username")}
            className="input-signup"
          ></input>
          <label className="label-signup">Email:</label>
          <input
            type="email"
            value={user.email}
            onChange={(e) => handleEvent(e, "email")}
            className="input-signup"
          ></input>
          <label className="label-signup">Criar senha:</label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => handleEvent(e, "password")}
            className="input-signup"
          ></input>
          <label className="label-signup">Confirme a senha:</label>
          <input type="password" className="input-signup"></input>
          <Link to="/perfil"><button className="button-signup" onClick={() => sendData(user)}>
            Registar!
          </button></Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
