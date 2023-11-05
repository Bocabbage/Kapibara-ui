import { reactive } from 'vue';
import optionApis from '@/api/local/optionApis'

const EMPTY_SESSION = () => ({
    // Return from the backend auth api
    username: null,
    expires: 0,
    access_token: '',
    token_type: 'Bearer',
    jit: '',

    // Local setting
    rememberMe: false,
})

const EMPTY_ACCOUNT = () => ({
    id: null,
    username: null,
})

const userSessionState = reactive({
    session:
        optionApis.hasSession() ?
        Object.assign(EMPTY_SESSION(), optionApis.getSession()) :
        EMPTY_SESSION,
    account:
        EMPTY_ACCOUNT
})

export default {
    isAuthorized() {
        // console.log("access_token: ", userSessionState.session.access_token)
        // console.log("expires and nowtime: ", userSessionState.session.expires, ", ", new Date().getTime())
        // console.log("getSession: ", optionApis.getSession())
        if (userSessionState.session.expires <= new Date().getTime())
        {
            optionApis.removeSession()
            userSessionState.session = EMPTY_SESSION
        }

        return (userSessionState.session.access_token && userSessionState.session.expires > new Date().getTime())
    },

    setUserSessionState(session_data) {
        session_data.expires = new Date().getTime() + (session_data.expires * 1000)
        userSessionState.session = session_data
        optionApis.setSession(session_data)
    },

    getUserSessionData() {
        return userSessionState
    }
}