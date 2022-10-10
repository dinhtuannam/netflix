import {
    getNowPlayingMovie,
    getTopRatedMovie,
    getUpcomingMovie,
    apiKey,
    getDetailMovie,
    getCasterMovie,
    getTrailer,
} from '../utils/ApiRequest';

export const getNowPlayingService = async (page) => {
    const path = `/now_playing?api_key=${apiKey}&language=en-US&page=${page}`;
    const response = await getNowPlayingMovie(path);
    return response;
};

export const getTopRatedService = async (page) => {
    const path = `/top_rated?api_key=${apiKey}&language=en-US&page=${page}`;
    const response = await getTopRatedMovie(path);
    return response;
};

export const getUpcomingService = async (page) => {
    const path = `/upcoming?api_key=${apiKey}&language=en-US&page=${page}`;
    const response = await getUpcomingMovie(path);
    return response;
};

export const getDetailMovieService = async (id) => {
    const path = `${id}?api_key=${apiKey}&language=en-US`;
    const response = await getDetailMovie(path);
    return response;
};

export const getCasterMovieService = async (id) => {
    const path = `${id}/credits?api_key=${apiKey}&language=en-US`;
    const response = await getCasterMovie(path);
    return response;
};

export const getTrailerService = async (id) => {
    const path = `${id}/videos?api_key=${apiKey}&language=en-US`;
    const response = await getTrailer(path);
    return response;
};
