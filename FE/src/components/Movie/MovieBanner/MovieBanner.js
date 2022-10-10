import { apiImgPath } from '../../../utils/publicPath';
import './MovieBanner.css';
import { Link } from 'react-router-dom';
function MovieBanner({ data }) {
    const path = apiImgPath + data.backdrop_path;
    const myStyle = { backgroundImage: `url(${path})` };

    const Time = () => {
        const hour = Math.floor(data.runtime / 60);
        const minutes = data.runtime % 60;
        return `${hour} hour ${minutes} minutes`;
    };

    return (
        <div className="movie-banner-container">
            <div className="movie-banner" style={myStyle}>
                <div className="banner-info-container">
                    <div className="detail-poster">
                        <img className="poster" src={apiImgPath + data.poster_path} alt="poster" />
                    </div>
                    <div className="detail-info">
                        <h1 className="banner-info-title">{data.title}</h1>
                        <p className="banner-overview">{data.overview}</p>
                        <p className="banner-time">Time : {Time()}</p>
                        <p className="banner-releasedate">Release date : {data.release_date}</p>
                        <div className="banner-genres-container">
                            {data.genres.map((item, index) => {
                                return (
                                    <span key={item.id} className="banner-genres-item">
                                        {item.name}
                                    </span>
                                );
                            })}
                        </div>
                        <div className="banner-btn">
                            <Link to={`/watch/id=${data.id}`} className="watch-span">
                                Watch now
                            </Link>
                            <span className="addplaylist-span">Add to playlists</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieBanner;
