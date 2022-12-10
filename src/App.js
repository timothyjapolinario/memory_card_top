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
  });
  const [score, setScore] = useState({
    currentScore: 0,
    highestScore: 0,
  });
  useEffect(() => {
    (async () => {
      const allChampions = await getAllChampions();
      setChampions({
        championList: allChampions,
        selectedChampions: [],
      });
    })();
  }, []);

  useEffect(() => {
    console.log(champions);
  }, [champions]);

  const selectChampions = (count) => {
    //shuffle the list
    //Destructure it since the sort method in shuffleArray is destructive
    const newSelectedChampions = shuffleArray([
      ...champions.championList,
    ]).slice(0, count);
    setChampions({
      championList: champions.championList,
      selectedChampions: newSelectedChampions,
    });
  };

  const onCardClick = (champion) => {
    if (!champions.championList.includes(champion)) {
      setScore({
        currentScore: score.currentScore + 1,
        highestScore: 0,
      });
    }
  };

  return (
    <div className="App">
      <div>
        <Header score={score} />
        <button onClick={() => selectChampions(5)}>Fetch!</button>
        <SelectedChampion
          selectedChampions={champions.selectedChampions}
          onCardClick={onCardClick}
        />
      </div>
    </div>
  );
}

export default App;
