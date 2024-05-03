import Button from '../pages/button';
import "./about.css"

import vscodeIcon from '../../assets/image/vscode-icons_file-type-typescript-official.png';
import vector4 from '../../assets/image/Vector (4).png';
import vector6 from '../../assets/image/Vector (6).png';
import vector5 from '../../assets/image/Vector (5).png';
import tailwindcssLogo from '../../assets/image/logos_tailwindcss.png';
const About = () => {
  const hireMe = () => {
    
  };
  
  return (
    <section id="About">
      <div className="aboutme">
        <h1>ABOUT ME</h1>
        <div className="aboutPar">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat</p>
          <div className="buttons">
            <Button onClick={hireMe} text="HIRE ME" className="button"  style={{ backgroundColor: '#F48C06', color: '#FFF' }} />
            <a href="../../assets/image/manzi.pdf" className="button" download>Resume</a>
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <div className="imSkills">
        <img src={vscodeIcon} alt="" />
          <img src={vector4} alt="" />
          <img src={vector6} alt="" />
          <img src={vector5} alt="" />
          <img src={tailwindcssLogo} alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
