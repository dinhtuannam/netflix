import axios from 'axios';

export const apiKey = '528eea1629968b3d0a5dba66ef8c4c5b';

export const tmdbRequest = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/',
});

export const getNowPlayingMovie = async (path, option = {}) => {
    const response = await tmdbRequest.get(path, option);
    return response.data.results;
};

export const getTopRatedMovie = async (path, option = {}) => {
    const response = await tmdbRequest.get(path, option);
    return response.data.results;
};

export const getUpcomingMovie = async (path, option = {}) => {
    const response = await tmdbRequest.get(path, option);
    return response.data.results;
};

export const getDetailMovie = async (path, option = {}) => {
    const response = await tmdbRequest.get(path, option);
    return response.data;
};

export const getCasterMovie = async (path, option = {}) => {
    const response = await tmdbRequest.get(path, option);
    return response.data.cast.slice(0, 8);
};

export const getTrailer = async (path, option = {}) => {
    const response = await tmdbRequest.get(path, option);
    return response.data.results[0];
};
