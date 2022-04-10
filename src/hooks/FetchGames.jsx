import { useEffect, useState } from "react";

export default function FetchGames(id = 1) {

  const [ loading, setLoading ] = useState(false);
  const [gameData, setGameData] = useState([]);

  async function fetchGameData() {
    let responseBody = {};
    setLoading(true)
    try {
      const response = await fetch(
        `https://www.balldontlie.io/api/v1/games?seasons[]=2021&team_ids[]=${id}&per_page=100`
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
      setLoading(false)
    } else {
    }
  }

  useEffect(() => {
    fetchGameData();
  }, [id]);

  return [gameData, loading]
}
