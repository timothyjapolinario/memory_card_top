import "../styles/SelectedChampions.css";
export default function SelectedChampion({ selectedChampions, onCardClick }) {
  const rendered = selectedChampions.map((champ) => {
    return (
      <div
        key={champ.championName + "_rd"}
        className="champion-card"
        onClick={onCardClick}
      >
        <img
          src={champ.loadingScreenImageURL}
          alt={"image of " + champ.championName}
        />
        <div>{champ.championName}</div>
      </div>
    );
  });
  return <div className="card-list">{rendered}</div>;
}
