import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import api from "../../services/api"
import { loginAction } from "../../store/actions";
import { isAuthSelector } from "../../store/selectors";
import { errorMessageSelector } from "../../store/selectors/authSelector";

export default ()=>{
    const {register,handleSubmit} = useForm()
    const dispatch  = useDispatch();
    const isAuth = useSelector(isAuthSelector);
    const history = useHistory();
    const errorMessage = useSelector(errorMessageSelector);
    useEffect(()=>{
        if(isAuth){
            history.push("/panel");
        }
    },[isAuth])
    const submit = (data)=>{
        dispatch(loginAction(data))
    }
 
    return {register,handleSubmit,submit,errorMessage}
};