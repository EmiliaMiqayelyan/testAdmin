import { useSelector } from "react-redux"
import { Redirect } from "react-router";
import { isAuthSelector } from "../../store/selectors"

export default ({children})=>{
    const isAuth = useSelector(isAuthSelector);
    return isAuth?children:<Redirect to="/login"/>
}