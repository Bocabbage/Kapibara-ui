import axios from 'axios'
import constants from "@/api/constants";
import option from "@/api/local/optionApis"

axios.defaults.timeout = constants.REMOTE_TIMEOUT
axios.defaults.baseURL = constants.REMOTE_BASE_URL

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

export default {
    // local-apis
    option
}