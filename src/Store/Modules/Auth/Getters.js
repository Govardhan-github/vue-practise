import { GET_USER_TOKEN_GETTER, IS_USER_AUTHENTICATED_GETTER } from "../../storeConstants";

export default {
    [GET_USER_TOKEN_GETTER]: state => {
        console.log(state.token);
        return state.token;
    },
    [IS_USER_AUTHENTICATED_GETTER]:(state) =>{
        console.log(state.token);
        return !state.token;
    }
}