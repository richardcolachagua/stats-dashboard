import axios from "axios";

const options = {
  method: "GET",
  url: "https://mlb-data.p.rapidapi.com/json/named.player_info.bam",
  params: {
    sport_code: "'mlb'",
    player_id: "'493316'",
  },
  headers: {
    "X-RapidAPI-Key": "b3dd72f6dbmsh95bbf8a55ef2b53p190f0fjsn0dd538ebb8d7",
    "X-RapidAPI-Host": "mlb-data.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}
