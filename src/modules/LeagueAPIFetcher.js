import champions from "../champions.json";
console.log(champions);
async function fetchAllChampionInfo() {
  try {
    return champions.data;
  } catch (error) {
    console.log("Error Fetching All Champion Information: " + error);
  }
}

export { fetchAllChampionInfo };
