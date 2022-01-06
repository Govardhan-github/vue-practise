
import actions from './Actions'
import mutations from './Mutations'
import getters from './Getters'
export default{
    namespaced: true,
    state(){
        return { 
            token:'',
            email : '',
            userId : '',
            refreshToken: '',
            expiresIn : ''
        }
    },
    actions,
    mutations,
    getters
}