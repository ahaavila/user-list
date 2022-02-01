import axios from 'axios';

export const GET_USERS = 'GET_USERS';
// export const GET_EPISODES_BY_ID = 'GET_EPISODES_BY_ID';

export const getUsers = async () => {
  const payload = await axios.get(
    'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data',
  );

  return {
    type: GET_USERS,
    users: payload.data,
  };
};

// export const getEpisodeById = async (season: string, number: string) => {
//   const payload = await axios.get(
//     `https://api.tvmaze.com/shows/6771/episodebynumber?season=${season}&number=${number}`,
//   );

//   return {
//     type: GET_EPISODES_BY_ID,
//     episode: payload.data,
//   };
// };
