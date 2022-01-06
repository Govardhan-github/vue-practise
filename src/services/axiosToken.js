import axios from 'axios'
const axiosInstnace = axios.create({});

axiosInstnace.interceptors.request.use(config =>{
    let params = new URLSearchParams();
    // let token = store.getters[`auth/${GET_USER_TOKEN_GETTER}`]
    // console.log(token);
    params.append('gopi','reddy');
    config.params =  params;
    return config

})

export default axiosInstnace;