import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import api from "../../services/api"
import { loginAction } from "../../store/actions"

export default ()=>{
    const {register,handleSubmit} = useForm()
    const dispatch  = useDispatch()
    const submit = (data)=>{
       // console.log(data);
        dispatch(loginAction(data))
    }
 
    return {register,handleSubmit,submit}
}