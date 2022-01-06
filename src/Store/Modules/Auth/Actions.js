import { LOGIN_ACTION, SET_USER_TOKEN_MUTATION, AUTO_LOGIN_ACTION,SIGNUP_ACTION, LOGOUT_ACTION, AUTH_ACTION } from '../../storeConstants'
import Axios from 'axios'
import loginValidations from '../../../services/loginValidation';

export default {

    async [LOGIN_ACTION](context, payload) {
        context.dispatch(AUTH_ACTION, {
            ...payload,
            url: `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA9HEOZrRHZP026VQObeDz2PVD_GLpMV50`
        });
    },

    async [SIGNUP_ACTION](context, payload) {
        context.dispatch(AUTH_ACTION, {
            ...payload,
            url: `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA9HEOZrRHZP026VQObeDz2PVD_GLpMV50`
        });

    },

    async [AUTO_LOGIN_ACTION](context){
        let userData = localStorage.getItem('userData');
        if(userData){
            context.commit(SET_USER_TOKEN_MUTATION , JSON.parse(userData))
        }

    },
    async [AUTH_ACTION](context, payload) {
        let postData = {
            email: payload.email,
            password: payload.password,
            retuenSecureToken: true
        }
        // let response = '';
        // context.commit(LOADING_sPINNER_SHOW_MUTATION,true ,{root : true})
        try {
            let response = await Axios.post(payload.url, postData)
            console.log(response.status);

            // context.commit(LOADING_sPINNER_SHOW_MUTATION,false,{root : true})
            if (response.status === 200) {
                console.log("200");
                let tokenData = {
                    token: response.data.idToken,
                    email: response.data.email,
                    userId: response.data.localId,
                    expiresIn: response.data.expiresIn,
                    refreshToken: response.data.refreshToken,
                }
                // console.log(tokenData);
                localStorage.setItem("userdata", JSON.stringify(tokenData))
                context.commit(SET_USER_TOKEN_MUTATION, tokenData)
            }
        } catch (err) {
            // context.commit(LOADING_sPINNER_SHOW_MUTATION,false,{root : true})
            let errorMsg = loginValidations.getErrorMessageFromCode(err.response.data.error.errors[0].message)
            console.log(errorMsg);
            throw errorMsg;
        }
    },

    [LOGOUT_ACTION](context) {
        context.commit(SET_USER_TOKEN_MUTATION, {
            token: null,
            email: null,
            userId: null,
            expiresIn: null,
            refreshToken: null
        })
    },

}