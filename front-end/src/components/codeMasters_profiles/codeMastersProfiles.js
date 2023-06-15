import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//css
import "./codeMastersProfiles.css";
//img
import logo from "../../img/logo.png";



function CodeMastersProfiles(props) {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/profile");
        const data = await res.json();
        setProfiles(data.profiles);
        console.log(data.profiles);
      } catch (error) {
        console.log("Ocorreu um erro ao obter os codeMasters:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="background-codeMastersProfiles">
      <div className="div-profiles">
      <Link to="/"><img src={logo} className="logo" alt="Logo" /></Link>
        <div className="div-codeMasters">
        {profiles.map((profile, index) => (
  <div className={`profile-item ${index % 2 === 0 ? 'item-left' : 'item-right'}`} key={profile._id}>
    <div className="card-text">
    <div>
      <img src={`/img-profiles/${profile.username}.jpg`} alt="Profile" className="img-profile" /> 
    </div>
    <h4>{profile.name}</h4>
    <p>FullStack</p>
  </div>
  </div>
))}
        </div>
      </div>
    </div>
  );
}

export default CodeMastersProfiles;
