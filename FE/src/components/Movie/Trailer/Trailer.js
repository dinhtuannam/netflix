import { Fragment, useEffect } from 'react';
import { useState } from 'react';
import { getTrailerService } from '../../../apiService/MovieService';
import './Trailer.css';
import YouTube from 'react-youtube';
function Trailer({ data }) {
    const [trailer, setTrailer] = useState();
    useEffect(() => {
        const getTrailer = async () => {
            const response = await getTrailerService(data);
            setTrailer(await response);
        };
        getTrailer();
    }, [data]);

    const RenderTrailer = () => {
        return (
            <Fragment>
                <h1 className="trailer-title">Trailer</h1>
                <div className="trailer-video">
                    <YouTube videoId={trailer.key} />
                </div>
            </Fragment>
        );
    };

    return <div>{trailer && RenderTrailer()}</div>;
}

export default Trailer;
