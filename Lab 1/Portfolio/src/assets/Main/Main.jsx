import "./Main.css";
import myPhoto from "../Images/yousse (1).jpeg";

function Main() {
  const cvURL = 'https://drive.google.com/file/d/1wNNV86UrYbQ_Vi-7ZfBCuzMTGF_K_Iiy/view?usp=sharing';
  return (
    <div className="mainContainer">
      <div className="firstPart">
        <h4>Hi , I am</h4>
        <h2>Youssef Ashraf</h2>

        <a
          href={cvURL}
          target="_blank"
          rel="noopener noreferrer"
          className="cv-button"
        >
          Download my CV
        </a>
      </div>

      <div className="secondPart">
        <img src={myPhoto} alt="Youssef" />
      </div>
    </div>
  );
}

export default Main;
