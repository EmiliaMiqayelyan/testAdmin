import { useEffect } from "react"

export default ()=>{
    useEffect(()=>{
        const access = localStorage.getItem("access")
        if(!access){
            window.location = "/login"
        }
    },[])
    return <div>
        this is Panel
    </div>
}
