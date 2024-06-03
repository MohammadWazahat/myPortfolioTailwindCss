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
        <div className="bodySection flex flex-row mx-16">
          <div className="intro basis-2/3 mx-10 my-12">
            <div className="introBoxOne ">
              <div className="helloWorld alphaColor my-3"> -- Hello World --</div>

              <div className="name text-2xl">
                I am <span className="alphaColor my-3">M</span>ohammad
                <span className="alphaColor">W</span>azahat
              </div>
              <div className="designation my-3">
                <span id="element" className="alphaColor text-xl"></span>
              </div>
              <div className="introDesc my-3 text-lg">
                Hi there! My name is Mohammad Wazahat and I am a Computer
                Science Post Graduate currently pursuing MCA ( Master's of
                Computer Applications ) from Manipal university , Jaipur . I
                love all things about tech and coding, and currently i am
                working on my skill building
              </div>
            </div>
            <div className="profileButtons my-16 flex ">
              <div className="profieButton border border-green-100 p-3 px-5 text-lg hover:text-green-500 hover:border-green-500 mr-16">
                <button>My Resume</button>
              </div>
              <div className="profieButton border border-green-100 p-3 px-5 text-lg hover:text-green-500 hover:border-green-500 ">
                <button>My Github</button>
              </div>
            </div>
          </div>
          <div className="profilePic basis-1/3">
            <img src={imgpic} alt="Trulli" className="profileImage"></img>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
