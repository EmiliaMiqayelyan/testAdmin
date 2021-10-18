import { Link } from "react-router-dom";
import "./style.css";

export default () => {
    return <div>
        <Link to='/login' className="homeLogin">Welcome !</Link>
    </div>
};