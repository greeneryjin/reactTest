import "../component/Header.css";
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <nav>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/write">글 등록</Link></li>
                <li><Link to="/OneSearch">단 건 조회</Link></li>
                <li><Link to="/search">전체 조회</Link></li>
                <div className="right">
                    <li><Link to="/login">로그인</Link></li>
                    <li><Link to="/logout">로그아웃</Link></li>
                </div>
            </ul>
        </nav>     
    );
};

export default Header;