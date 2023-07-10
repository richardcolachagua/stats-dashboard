import axios from "axios";

export async function fetchPlayerStats() {
  const options = {
    method: "GET",
    url: "https://mlb-data.p.rapidapi.com/json/named.player_info.bam",
    params: {
      sport_code: "'mlb'",
      player_id: "'493316'",
    },
    headers: {
      "X-RapidAPI-Key": process.env.REACT_APP_MLB_API_KEY,
      "X-RapidAPI-Host": "mlb-data.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    const stats = response.data.stats;
    if (!stats || stats.length === 0) {
      throw new Error("Invalid API response: missing stats data");
    }
    const splits = stats[0].splits;
    if (!splits || splits.length === 0) {
      throw new Error("Invalid API response: missing splits data");
    }
    return splits;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
