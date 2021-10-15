export const isAuthSelector = (state)=>{
    return state.auth.isAuth
}
export const userSelector = state=>state.auth.user
export const errorMessageSelector = state=>state.auth.errorMessage