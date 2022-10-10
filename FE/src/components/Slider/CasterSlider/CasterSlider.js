import { Fragment, useEffect, useState } from 'react';
import { getCasterMovieService } from '../../../apiService/MovieService';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Scrollbar, A11y } from 'swiper';
import { apiImgPath } from '../../../utils/publicPath';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './CasterSlider.css';
SwiperCore.use([Navigation, Scrollbar, A11y]);

function CasterSlider({ data }) {
    const [caster, setCaster] = useState();

    useEffect(() => {
        const getCaster = async () => {
            const response = await getCasterMovieService(data);
            setCaster(await response);
        };
        getCaster();
    }, [data]);

    const renderSlider = () => {
        return (
            <Fragment>
                <h1 className="cast-title">Cast</h1>
                <Swiper spaceBetween={50} slidesPerView={4} navigation pagination={{ clickable: true }}>
                    {caster.map((person, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="caster-info">
                                    <div className="caster-img">
                                        <img
                                            src={apiImgPath + person.profile_path}
                                            className="caster-img"
                                            alt="casterimg"
                                        />
                                    </div>
                                    <p className="caster-name">{person.name}</p>
                                    <p className="caster-character">{person.character}</p>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Fragment>
        );
    };

    return <div className="caster-slider-container">{caster && renderSlider()}</div>;
}

export default CasterSlider;
