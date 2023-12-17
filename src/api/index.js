import axios from 'axios'
import constants from "@/api/constants";
import option from "@/api/local/optionApis"

axios.defaults.timeout = constants.REMOTE_TIMEOUT
axios.defaults.baseURL = constants.REMOTE_BASE_URL

// todo: check validity
// global http-request interceptor
axios.interceptors.request.use(
    (config) => {
        // check whether is an oath-needed service
        if(config.baseURL !== constants.AUTH_BASE_URL)
        {
            // check whether the session available
            // and use the JWT-token
            if(option.isSessionAvailable())
            {
                config.headers = {
                    'Authorization': constants.AUTH_TOKEN_TYPE + option.getSession().access_token
                }
            }
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// axios.interceptors.response.use(res => {
//     if (res.data && res.data.code && res.data.code !== 0) {
//         return Promise.reject(Error(res.data.message))
//     } else {
//         return Promise.resolve(res)
//     }
// }, error => {
//     console.error('remote server failed: ', error)
//     const res = error.response
//     if (res && res.data) {
//         console.error(res.data)
//     }
//     return Promise.reject(error)
// })

export default {
    // local-apis
    option
}