import axios from "axios";
import { API_KEY } from "../config";
import axiosClient from "../config/axiosClient";
const tv = {
  getAiringToday: async (page = 1) => {
    const dataAtd = await axiosClient.get(
      `/tv/airing_today?api_key=${API_KEY}&page=${page}&language=id`
    );
    return dataAtd.data;
  },
  getOntheAir: async (page = 1) => {
    const dataOta = await axiosClient.get(
      `/tv/on_the_air?api_key=${API_KEY}&page=${page}&language=id`
    );
    return dataOta.data;
  },
  getPopular: async (page = 1) => {
    const dataPopular = await axiosClient.get(
      `/tv/popular?api_key=${API_KEY}&page=${page}&language=id`
    );
    return dataPopular.data;
  },
  getTVTrending: async (page = 1) => {
    const dataTrend = await axiosClient.get(
      `/trending/tv/day?api_key=${API_KEY}&page=${page}&language=id`
    );

    return dataTrend.data;
  },
  getRated: async (page = 1) => {
    const dataRated = await axiosClient.get(
      `/tv/top_rated?api_key=${API_KEY}&page=${page}&language=id`
    );
    return dataRated.data;
  },
  getDetail: async (id: string) => {
    const data = await axiosClient.get(
      `/tv/${id}?api_key=${API_KEY}&language=id`
    );
    return data.data;
  },

  getEpisodeSeason: async (id: string, season: any[]) => {
    // const data = await axiosClient.get(
    //   `/tv/${id}/season/${season}?api_key=${API_KEY}&language=id`
    // );
    const data = await axios.all(
      season.map(async (item: any) => {
        const episodes = await axiosClient.get(
          `/tv/${id}/season/${item.season_number}?api_key=${API_KEY}&language=id`
        );
        return episodes.data;
      })
    );

    return data;
  },
  getSimilars: async (id: string) => {
    const data = await axiosClient.get(
      `/tv/${id}/similar?api_key=${API_KEY}&language=id`
    );
    return data.data;
  },
  getOnlyEpisode: async (id: string, season: string, episode: string) => {
    const data = await axiosClient.get(
      `/tv/${id}/season/${season}?api_key=${API_KEY}&language=id`
    );
    return data.data.episodes.find(
      (item: any) => item.episode_number == episode
    );
  },
  getReviews: async (id: string) => {
    const data = await axiosClient.get(`/tv/${id}/reviews?api_key=${API_KEY}`);
    return data.data;
  },
};

export default tv;
