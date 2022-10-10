import { useParams } from 'react-router-dom';
import '../../assets/css/WatchPage.css';
function WatchPage() {
    const { id } = useParams();
    return (
        <div className="watch-page-container">
            <div className="navigation-spacing"></div>
            <div className="watch-content">
                <div className="frame-container">
                    <iframe
                        id="iframe"
                        src={`https://www.2embed.to/embed/tmdb/movie?id=${id}`}
                        className="watch-frame"
                        title="iframe"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="watch-similiar-film">
                    <ul>
                        <li>asd</li>
                        <li>ddd</li>
                        <li>ddd</li>
                        <li>ddd</li>
                        <li>ddd</li>
                        <li>ddd</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WatchPage;
