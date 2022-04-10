import { useEffect, useState } from "react";

export default function FetchGames() {
  const [gameData, setGameData] = useState([]);

  async function fetchGameData() {
    let responseBody = {};
    try {
      const response = await fetch(
        `https://www.balldontlie.io/api/v1/games?seasons[]=2021&per_page=100`
      );
      responseBody = await response.json();
    } catch (e) {
      if (e instanceof DOMException) {
        console.log("== HTTP request cancelled");
      } else {
        throw e;
      }
    }

    if (responseBody.data) {
      setGameData(responseBody.data || []);
    } else {
    }
  }

  useEffect(() => {
    fetchGameData();
  }, []);

  return gameData;
}
