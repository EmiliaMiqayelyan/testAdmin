import { Button } from "react-bootstrap"
import { Link } from "react-router-dom";
export default ()=>{
    return <div>
        Thie is Home
        <Link to = '/login'><Button>Login</Button></Link>
    </div>
}