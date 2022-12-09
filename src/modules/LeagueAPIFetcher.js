async function fetchAllChampionInfo() {
  try {
    const championInfos = await fetch(
      "http://ddragon.leagueoflegends.com/cdn/12.23.1/data/en_US/champion.json"
    ).then((response) => {
      return response.json();
    });
    return championInfos.data;
  } catch (error) {
    console.log("Error Fetching All Champion Information: " + error);
  }
}

export { fetchAllChampionInfo };
