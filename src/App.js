import { getAllChampions } from "./modules/LeagueChampions";
function App() {
  const loadChampions = (count) => {};
  return (
    <div className="App">
      <button onClick={getAllChampions}>Fetch!</button>
    </div>
  );
}

export default App;
