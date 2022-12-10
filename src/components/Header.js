import "../styles/Header.css";
import logo from "../lol.png";
export default function Header({ score }) {
  return (
    <div className="Header">
      <div className="logo">
        <img src={logo} alt="logo" id="lol-logo" />
      </div>
      <div className="title">Memory Game!</div>
      <div className="score">
        <div className="currentScore">Current Score: {score.currentScore}</div>
        <div className="highestScore">Highest Score : {score.highestScore}</div>
      </div>
    </div>
  );
}
