import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Perfil.css';
import { FaFacebook, FaTwitter, FaInstagram, FaArrowLeft, FaArrowAltCircleRight, FaLinkedin, FaGithub } from 'react-icons/fa';
import logo from "../../img/logo.png"



const ProfilePage = () => {
  return (
    <div className='divFoto' >
      <div className="profile222">
        <div className="profile-inner"
        >
          <div className="profile-image" >
            <img
              src="https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
              alt="Profile Picture"
            />
          </div>
          <div className="profile-titles">
            <h1 className="profile-name" >Solange Dias</h1>
            <div className="profile-skills"  >
              <h3 className='textoProgramador' >FullStack</h3>
            </div>
          </div>
          <div className="profile-social">
            <div className="social-icons">
              <a href="https://Linkedin.com">
                <FaLinkedin size={"50px"} color='white'/>
              </a>
            </div>
            <div className="social-icons">
              <a href="https://twitter.com">
                <FaGithub  size={"50px"} color='white'/>
              </a>
            </div>
            <div className="social-icons">
              <a href="https://instagram.com">
                <FaInstagram  size={"50px"} color='white'/>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className='divNova' style={{
        width: '1000px',
        height: '150px',
        border: '2px solid #FFFFFF',
        borderRadius: '5px',
        marginTop: '50px',
        textAlign: 'center',
        margin: '0 auto',
        padding: '20px',
        marginBottom: '40px'
      }}>
        <h2 style={{ textAlign: 'center', color: '#45459A' }}>Sobre Mim</h2>
        <div
          className="about-me"
          style={{
            backgroundColor: '#D9D9D9',
            width: '1000px',
            height: '100px',
            borderRadius: '5px',
            marginTop: '50px',
            textAlign: 'center',
            margin: '0 auto',
            border: '2px solid #000000',
            borderBlockColor: '#45459A',

          }}
        >

          <p style={{ color: '#45459A', padding: '10px' }}>
            Adicione informações.
          </p>
        </div>
      </div>
      <div className='divHabilitacoes' style={{
        width: '1000px',
        height: '350px',
        border: '2px solid #FFFFFF',
        borderRadius: '5px',
        marginTop: '50px',
        textAlign: 'center',
        margin: '0 auto',
        padding: '20px',
        marginBottom: '40px'
      }}>
        <h2 style={{ textAlign: 'center', color: '#45459A' }}>Experiências</h2>
        <div
          className="about-me"
          style={{
            backgroundColor: '#D9D9D9',
            width: '1000px',
            height: '100px',
            borderRadius: '5px',
            marginTop: '150px',
            textAlign: 'center',
            margin: '0 auto',
            border: '2px solid #000000',
            borderBlockColor: '#45459A'
          }}
        >

          <p style={{ color: '#45459A', padding: '10px' }}>
          Adicione informações.
          </p>
        </div>

        <div
          className="about-me"
          style={{
            backgroundColor: '#D9D9D9',
            width: '1000px',
            height: '100px',
            borderRadius: '5px',
            marginTop: '150px',
            textAlign: 'center',
            margin: '0 auto',
            border: '2px solid #000000',
            borderBlockColor: '#45459A'
          }}
        >

          <p style={{ color: '#45459A', padding: '10px' }}>
          Adicione informações.
          </p>
        </div>

        <div
          className="about-me"
          style={{
            backgroundColor: '#D9D9D9',
            width: '1000px',
            height: '100px',
            borderRadius: '5px',
            marginTop: '150px',
            textAlign: 'center',
            margin: '0 auto',
            border: '2px solid #000000',
            borderBlockColor: '#45459A',

          }}
        >

          <p style={{ color: '#45459A', padding: '10px' }}>
          Adicione informações.
          </p>
        </div>

      </div>


      <div className='divLinguagens' style={{
        width: '1000px',
        height: '150px',
        border: '2px solid #FFFFFF',
        borderRadius: '5px',
        marginTop: '50px',
        textAlign: 'center',
        margin: '0 auto',
        padding: '20px',
        marginBottom: '40px'
      }}>
        <h2 style={{ textAlign: 'center', color: '#45459A' }}>Linguagens</h2>

        <div
          className="about-me"
          style={{
            backgroundColor: '#D9D9D9',
            width: '1000px',
            height: '100px',
            borderRadius: '5px',
            marginTop: '50px',
            textAlign: 'center',
            margin: '0 auto',
            border: '2px solid #000000',
            borderBlockColor: '#45459A',
          }}
        >

          <p style={{ color: '#45459A', padding: '10px' }}>
          Adicione informações.
          </p>
        </div>
      </div>




    </div>

  );
};


const Perfil = () => {
  return (

    <div className='background-perfil'>
        <div className='header-perfil'>
      <Link to="/"><img src={logo} alt="Logo" className="logo"
      /></Link>
      <Link to="/codemastersprofiles"><button className="button-codeMasters">CodeMasters</button></Link>
</div>
      <ProfilePage />

    </div>
  );
};

export default Perfil;