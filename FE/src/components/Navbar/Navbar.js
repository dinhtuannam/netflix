import NetflixLogo from '../../assets/image/netflix-img.png';
//import { MdSearch } from 'react-icons/md';
import './Navbar.css';
import { useScrollY } from '../../hooks/useScrollY';
import { Link } from 'react-router-dom';
function Navbar() {
    const [scrollY] = useScrollY();

    return (
        <div
            className="Navigation"
            style={scrollY < 50 ? { background: 'transparent' } : { background: 'var(--color-background)' }}
        >
            <div className="navContainer">
                <div className="navbarLogo">
                    <Link to="/">
                        <img className="navbarImg" src={NetflixLogo} alt="Netflix logo" />
                    </Link>
                </div>
                {/* <div className="navSearch">
                    <MdSearch className="iconSearch" />
                    <input className="inputSearch" type="text" />
                </div> */}
                <div className='navbar-controller'>
                    <a href="http://localhost:3000/register" className='register-btn'>Register</a>
                    <a href="http://localhost:3000/login" className='login-btn'>Login</a>                
                </div>
            </div>
        </div>
    );
}

export default Navbar;

// const Navigation = styled.div`
//     width: 100%;
//     height: 80px;
//     position: fixed;
//     top: 0;
//     transition: all 1s;
//     transition-timing-function: ease-in;
//     z-index: 10;
//     @media only screen and (max-width: 600px) {
//         height: 100px;
//     }

//     .navContainer {
//         display: flex;
//         align-items: center;
//         justify-content: flex-start;
//         height: 100%;
//         flex-direction: row;

//         @media only screen and (max-width: 600px) {
//             flex-direction: row;
//             height: 100px;
//         }
//     }

//     .logo {
//         width: 120px;
//         cursor: pointer;
//         img {
//             width: 100%;
//         }
//     }

//     .navSearch {
//         color: white;
//         padding-right: 20px;
//         display: flex;
//         justify-content: flex-end;

//         &:hover .iconSearch {
//             color: white;
//         }

//         .iconSearch {
//             width: 20px;
//             height: 20px;
//             cursor: pointer;
//             transform: translateX(24px) translateY(10px);
//             color: #bbb;
//         }

//         input {
//             font-size: 14px;
//             border: 1px solid #fff;
//             color: white;
//             outline: none;
//             width: 0;
//             padding: 10px;
//             cursor: pointer;
//             opacity: 0;
//             background: #222;
//             transition: width 0.5s;

//             &:focus {
//                 padding-left: 26px;
//                 width: 300px;
//                 cursor: text;
//                 opacity: 1;
//                 border-radius: 4px;
//             }
//         }
//     }
// `;
