import { Fragment, useEffect, useState } from 'react';
import './SimiliarMovie.css';
import {getSimiliarService } from '../../../apiService/MovieService';
import { apiImgPath } from '../../../utils/publicPath';
import {AiFillStar} from 'react-icons/ai';

function SimiliarMovie({data}) {
    const [movie,setMovie] = useState();
    useEffect(()=>{
        const getAPIMovie = async() =>{
            const response = await getSimiliarService(data);
            setMovie(await response);
        }
        getAPIMovie();
    },[data])
    
    const RenderMovie = () =>{
        return (
            <ul className='list-similar-film'>
                <h1 className='similar-title'>Similar Films</h1>
            {movie.map(item=>{

                if(item.title.length > 18){
                    item.title = item.title.slice(0,19) + " ...";
                }
                item.vote_average = Math.round(item.vote_average * 100) / 100
                return (
                    <li className='list-similiar-item' key={item.id}>
                        <a href={`http://localhost:3000/movie/id=${item.id}`} className='similar-img-container'>
                            <img src={apiImgPath + item.poster_path} alt="img poster" className='similar-img'/>
                        </a>
                        <div className='similar-info-container'>
                            <h1 className='similar-title-movie'>{item.title}</h1>
                            <h3 className='similar-date-movie'>{item.release_date}</h3>
                            <div>
                                <p className='similar-vote'>{item.vote_average.toFixed(1)}</p>
                                <AiFillStar className='similar-star'/>
                            </div>
                            <button className='similar-playlist-btn'>
                                Add to Playlists
                            </button>
                        </div>
                    </li>
                )
            })}
        </ul> 
        )
    }

    return ( 
        <div>
            {movie?RenderMovie():<Fragment></Fragment>}
        </div>
    );
}

export default SimiliarMovie;