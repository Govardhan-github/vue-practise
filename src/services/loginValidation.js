import validations from './validations'

export default class loginValidations{
    constructor(email,password){
        this.email=email;
        this.password = password;
    }
    checkValidations(){
        let errors= [];

        if(!validations.checkEmail(this.email)){
            errors['email'] = 'Invalid Email';
        }
        if(!validations.minLength(this.password, 6 )){
            errors['password'] = 'password should be of 6 characters'
        }
        return errors;
    }
    static getErrorMessageFromCode(errCode){
        switch(errCode){
            case 'EMAIL_EXISTS' : return 'Email Already exists'
            case 'EMAIL_NOT_FOUND'  :return 'Email Not Found'
            case 'INVALID_PASSWORD'  : return 'Invalid Password'
            default : return 'Unexpected error'
        }
    }
}