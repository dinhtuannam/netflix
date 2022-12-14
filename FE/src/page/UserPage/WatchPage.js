import { useParams} from 'react-router-dom';
import { useState,useEffect, Fragment } from 'react';
import { getDetailMovieService } from '../../apiService/MovieService';
import {FaDatabase} from 'react-icons/fa'
import {AiOutlineCloudDownload,AiFillStar} from 'react-icons/ai';
import {BsExclamationCircle} from 'react-icons/bs';
import '../../assets/css/WatchPage.css';
import SimiliarMovie from '../../components/Movie/SimiliarMovie/SimiliarMovie';
function WatchPage() {
    const { id } = useParams();
    const [movie, setMovie] = useState();

    useEffect(() => {
        const getMovie = async () => {
            const response = await getDetailMovieService(id);
            setMovie(await response);
        };
        getMovie();
    }, [id]);
    console.log(movie)
    const RenderContent = () =>{
        return(
            <div className="watch-page-container">
            <div className="navigation-spacing"></div>
            <div className="watch-content">
                <div className="frame-container">
                    <div className='watch-control'>
                        <div className='watch-server'>
                            <FaDatabase/>
                            <p>Server</p>
                            <button className='server-1'>#1 GR</button>
                            <button className='server-2'>#2 HR</button>
                        </div>
                        <div className='watch-download'>
                            <div className='watch-download-btn'>
                                <AiOutlineCloudDownload className='download-icon'/>
                                Download
                            </div>
                            <div className='watch-download-btn'>
                                <BsExclamationCircle className='download-icon'/>
                                Report
                            </div>
                        </div>
                    </div>
                    <iframe
                        id="iframe"
                        src={`https://www.2embed.to/embed/tmdb/movie?id=${id}`}
                        className="watch-frame"
                        title="iframe"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                    <div className='watch-movie-info'>
                        <div className='info-container'>
                            <h1 className='watch-movie-title'>{movie.title}</h1>
                            <div className='watch-rate-container'>
                                <p className='watch-movie-rate'>Vote rate : {movie.vote_average.toFixed(1)}</p>
                                <AiFillStar className='watch-movie-icon'/>
                            </div>
                            <p className='watch-overview-title'>Overview</p>
                            <p className='watch-movie-overview'>{movie.overview}</p>
                        </div>
                    </div>
                </div>
                <div className="watch-similiar-film">
                    <SimiliarMovie data={id}/>
                </div>
            </div>
        </div>
        )
    }

    return (
        <div>
            { movie ? RenderContent():<Fragment></Fragment>}
        </div>
    );
}

export default WatchPage;
