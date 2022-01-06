import { SET_USER_TOKEN_MUTATION } from "../../storeConstants";

export default { 
    [SET_USER_TOKEN_MUTATION](state,payload){
        state.email =  payload.email;
        state.token =  payload.idToken;
        state.expiresIn =  payload.expiresIn;
        state.userId =  payload.userId;
        state.refreshToken = payload.refreshToken;
    },
    
}