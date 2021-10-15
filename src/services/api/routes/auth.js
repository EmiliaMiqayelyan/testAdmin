import api from ".."

export const loginRequest = async (username,password)=>{
    try {
        const responce = await api.post("login/login/",{
            username,
            password
        })
        return responce.data
    } catch (error) {
        if( error.response){
            throw error.response.data;  
        }
        throw error
    }
    
}

export const getMyRequest = async ()=>{
    try {
        const responce = await api.get("users/get-me/")
        return responce.data
    } catch (error) {
        if( error.response){
            throw error.response.data; 
        }
        throw error
    }
    
}