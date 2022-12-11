import { getAllChampions } from "./modules/LeagueChampions";
import React, { useEffect, useState } from "react";
import SelectedChampion from "./components/SelectedChampions";
import Header from "./components/Header";
import "./styles/App.css";
function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function App() {
  const [champions, setChampions] = useState({
    championList: [],
    selectedChampions: [],
    guessedChampions: [],
  });
  const [score, setScore] = useState({
    currentScore: 0,
    highestScore: 0,
    stageScore: 0,
    gameOver: false,
  });
  //Cache all champions in a list
  useEffect(() => {
    (async () => {
      const allChampions = await getAllChampions();
      setChampions({
        championList: allChampions,
        selectedChampions: [],
        guessedChampions: [],
      });
    })();
  }, []);

  //Initialize selected champions after fetching all champions from API
  useEffect(() => {
    selectChampions(5);
  }, [champions.championList]);

  //Update score when card is clicked
  useEffect(() => {
    const selChampsLength = champions.selectedChampions.length;
    if (selChampsLength !== 0 && score.stageScore === selChampsLength) {
      setScore({
        ...score,
        stageScore: 0,
      });
      selectChampions(champions.selectedChampions.length + 5);
    }
  }, [score, champions]);

  //Gameover
  useEffect(() => {
    if (score.gameOver === true) {
      setScore({ ...score, gameOver: false });
      selectChampions(5);
    }
  }, [score.gameOver]);
  const selectChampions = (count) => {
    //shuffle the list
    //Destructure it since the sort method in shuffleArray is destructive
    const newSelectedChampions = shuffleArray([
      ...champions.championList,
    ]).slice(0, count);
    setChampions({
      championList: champions.championList,
      selectedChampions: newSelectedChampions,
      guessedChampions: [],
    });
  };

  const onCardClick = (champion) => {
    if (!champions.guessedChampions.includes(champion)) {
      //Add score
      setChampions({
        ...champions,
        selectedChampions: shuffleArray(champions.selectedChampions),
        guessedChampions: champions.guessedChampions.concat(champion),
      });

      setScore({
        currentScore: score.currentScore + 1,
        highestScore:
          score.highestScore <= score.currentScore + 1
            ? score.currentScore + 1
            : score.highestScore,
        stageScore: score.stageScore + 1,
        gameOver: false,
      });
    } else {
      //Gameover
      setScore({
        currentScore: 0,
        highestScore: score.highestScore,
        stageScore: 0,
        gameOver: true,
      });
    }
  };

  return (
    <div className="App">
      <div>
        <Header score={score} />
        <SelectedChampion
          selectedChampions={champions.selectedChampions}
          onCardClick={onCardClick}
        />
      </div>
    </div>
  );
}

export default App;
