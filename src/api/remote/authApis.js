import axios from 'axios'
import {sha256} from "js-sha256";

const login_api_uri = import.meta.env.VITE_LOGIN_API_URI
const login_pwd_salt = import.meta.env.VITE_USER_PASSWORD_SALT

export default {
    // login
    // For sending login request
    // ::param (account, password)
    login(account, password) {
        let crypto_password = sha256(password + login_pwd_salt)
        return axios.post(
            login_api_uri,
            {
                account: account,
                password: crypto_password
            },
            {headers: {'Content-Type': 'application/json'}}
        )
    }
}