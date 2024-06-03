import React, { useEffect } from "react";
import "./Home.css";
import imgpic from './PiyushGarg.png'
const Home = () => {

  useEffect(()=>{
    var typed = new Typed("#element", {
      strings: [
        "Software Engineer",
        "Sofware Tester",
        "Web Designer",
        "Web Developer",
      ],
      typeSpeed: 50,
    });
  }
  )

  return (
    <div className="sectionHome">
      <section >
        <div className="bodySection">
          <div className="intro">
            <div className="introBoxOne">
              <div className="helloWorld alphaColor"> -- Hello World --</div>

              <div className="name">
                I am <span className="alphaColor">M</span>ohammad
                <span className="alphaColor">W</span>azahat
              </div>
              <div className="designation">
                <span id="element" className="alphaColor"></span>
              </div>
              <div className="introDesc">
                Hi there! My name is Mohammad Wazahat and I am a Computer
                Science Post Graduate currently pursuing MCA ( Master's of
                Computer Applications ) from Manipal university , Jaipur . I
                love all things about tech and coding, and currently i am
                working on my skill building
              </div>
            </div>
            <div className="profileButtons">
              <div className="profieButton">
                <button>My Resume</button>
              </div>
              <div className="profieButton">
                <button>My Github</button>
              </div>
            </div>
          </div>
          <div className="profilePic">
            <img src={imgpic} alt="Trulli" className="profileImage"></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
