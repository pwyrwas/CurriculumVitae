import "./CvContainer.scss";
import { Expirience } from "./Expirience";


export const CvContainer = () => {
  return (
    <div className="container">
      <div className="cv-container">
        <div className="header">
          <div className="header__myPhoto"></div>
          <div className="header__intro">
            <h1>Paweł Wyrwas</h1>
            <h2>Fullstack developer</h2>
          </div>
        </div>
        <div className="bodies">
          <div className="body-a">
            <Expirience></Expirience>
          </div>
          <div className="body-b">
            <div className="education">
              <h3>Education</h3>
            </div>
            <div className="outside-work">
              <h3>Outside work</h3>
            </div>
            <div className="core-skils">
              <h3>Core skils</h3>
            </div>
            <div className="contact">
              <h3>Contact</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
