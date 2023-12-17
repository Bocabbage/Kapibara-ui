import axios from 'axios'
import {sha256} from "js-sha256"
// import bcrypt from "bcryptjs"

const login_api_uri = import.meta.env.VITE_LOGIN_API_URI
const login_pwd_salt = import.meta.env.VITE_USER_PASSWORD_SALT

export default {
    // login
    // For sending login request
    // ::param (account, password)
    login(username, password) {
        // let crypto_password = bcrypt.hashSync(sha256(password), login_pwd_salt).substring(login_pwd_salt.length)
        let crypto_password = sha256(password + login_pwd_salt)
        return axios.get(
            login_api_uri,
            {
                params: {
                    username: username,
                    password: crypto_password
                }
            }
        )
    }
}