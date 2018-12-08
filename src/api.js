import axios from "axios";

const apiConfig = {
  key: "EB6035700F012A291BF20EEEDC2DBBC9",
  checkUser: "https://api.steampowered.com/ISteamUser/ResolveVanityURL/v0001/",
  userDetails:
    "https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/",
  userGames: "https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/"
};

const getSteamID = username => {
  return axios.get(apiConfig.checkUser, {
    params: { key: apiConfig.key, vanityurl: username }
  });
};

const getUserDetails = steamID => {
  return axios.get(apiConfig.userDetails, {
    params: { key: apiConfig.key, steamids: steamID }
  });
};

const getUserGames = steamID => {
  return axios.get(apiConfig.userGames, {
    params: {
      key: apiConfig.key,
      steamid: steamID,
      format: "json",
      include_appinfo: 1
    }
  });
};

export default { getSteamID, getUserDetails, getUserGames };
