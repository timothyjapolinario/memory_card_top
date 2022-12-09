import { fetchAllChampionInfo } from "./LeagueAPIFetcher";
async function getAllChampions() {
  const rawData = await fetchAllChampionInfo();
  const allChampions = Object.keys(rawData).map((championName) => {
    return {
      [championName]: {
        loadingScreenImageURL: `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${championName}_0.jpg`,
      },
    };
  });
  console.log(allChampions);
  return allChampions;
}

export { getAllChampions };
